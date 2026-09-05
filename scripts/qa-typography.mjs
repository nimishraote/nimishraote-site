import fs from 'node:fs';
import path from 'node:path';

let failures = 0;
const read = (filePath) => fs.readFileSync(filePath, 'utf8');
const check = (name, ok) => {
  if (ok) console.log(`[PRESENTATION QA PASS] ${name}`);
  else {
    failures += 1;
    console.error(`[PRESENTATION QA FAIL] ${name}`);
  }
};

const globals = read('app/globals.css');
const home = read('components/site-shell.tsx');
const thoughts = read('app/thoughts/page.tsx');
const article = read('components/thought-article-layout.tsx');
const reactions = read('components/reaction-bar.tsx');
const presentation = [home, thoughts, article, reactions].join('\n');

for (const className of [
  'site-page-lede',
  'site-section-lede',
  'site-body-copy',
  'site-card-copy',
  'site-meta-copy',
]) {
  check(`Shared type scale defines ${className}`, globals.includes(`.${className}`));
}

check('Page ledes use a crisp 17px/26px desktop scale', /\.site-page-lede\s*\{[^}]*font-size:\s*1\.0625rem;[^}]*line-height:\s*1\.625rem;/s.test(globals));
check('Section subtext uses a standard 16px/24px scale', /\.site-section-lede\s*\{[^}]*font-size:\s*1rem;[^}]*line-height:\s*1\.5rem;[^}]*margin-top:\s*0\.75rem;/s.test(globals));
check('Body copy uses a compact 16px/26px scale', /\.site-body-copy\s*\{[^}]*font-size:\s*1rem;[^}]*line-height:\s*1\.625rem;/s.test(globals));
check('Card copy uses a compact 15px/22px scale', /\.site-card-copy\s*\{[^}]*font-size:\s*0\.9375rem;[^}]*line-height:\s*1\.375rem;/s.test(globals));
check('Metadata uses a 14px/20px scale', /\.site-meta-copy\s*\{[^}]*font-size:\s*0\.875rem;[^}]*line-height:\s*1\.25rem;/s.test(globals));

check('Shared patterned hero template is defined', /\.site-pattern-hero\s*\{[^}]*isolation:\s*isolate;[^}]*linear-gradient\(135deg, #0b1020/s.test(globals));
check('Patterned hero uses restrained bronze and burgundy edge textures', globals.includes('rgba(203, 164, 88, 0.34)') && globals.includes('rgba(130, 48, 67, 0.32)'));
check('Thoughts index uses the shared patterned hero template', /<section className="site-pattern-hero relative overflow-hidden">/.test(thoughts));
check('Thoughts hero removes the previous bright blue-purple overlay', !/rgba\(59,130,246,0\.30\).*rgba\(139,92,246,0\.24\)/s.test(thoughts));

check('Every top-level page section receives the shared compact vertical rhythm', /main > section > div\.relative\.mx-auto\s*\{[^}]*padding-top:\s*3rem;[^}]*padding-bottom:\s*3rem;/s.test(globals));
check('Mobile section rhythm is reduced to 40px', /padding-top:\s*2\.5rem;[^}]*padding-bottom:\s*2\.5rem;/s.test(globals));
check('Large section-to-content gaps are capped at 32px', /main > section > div\.relative\.mx-auto > div\.mt-10\s*\{[^}]*margin-top:\s*2rem;/s.test(globals));
check('Body paragraph spacing is standardized at 16px', /\.site-body-copy > \* \+ \*\s*\{[^}]*margin-top:\s*1rem !important;/s.test(globals));

check('Homepage hero uses the shared page-lede size', /site-page-lede mt-6 max-w-3xl/.test(home));
check('Homepage section introductions share one section-lede size', (home.match(/site-section-lede/g) ?? []).length >= 3);
check('About copy uses the shared body-copy size', /site-body-copy mt-6 space-y-5/.test(home));
check('App descriptions share one card-copy size across flagship and secondary cards', (home.match(/site-card-copy/g) ?? []).length >= 3);
check('Homepage metadata uses the shared meta size', /site-meta-copy text-slate-300/.test(home));
check('Thoughts index hero uses the same page-lede size', /site-page-lede mt-6 max-w-3xl/.test(thoughts));
check('Thoughts index excerpts use the shared card-copy size', /site-card-copy mt-3 max-w-3xl/.test(thoughts));
check('Article intros use the same page-lede size', /site-page-lede mt-6 max-w-3xl/.test(article));
check('Article prose uses the shared body-copy size', /site-body-copy space-y-6/.test(article));
check('Reaction helper text uses the shared meta size', (reactions.match(/site-meta-copy/g) ?? []).length >= 4);

const thoughtRoot = 'app/thoughts';
const articlePages = fs.readdirSync(thoughtRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(thoughtRoot, entry.name, 'page.tsx'))
  .filter((filePath) => fs.existsSync(filePath));
check('Every article page uses the shared article layout and therefore the shared type/spacing system', articlePages.length > 0 && articlePages.every((filePath) => /ThoughtArticleLayout/.test(read(filePath))));

check(
  'Legacy ad-hoc supporting-copy size/line-height pairs are removed from presentation surfaces',
  !/text-lg leading-8 text-slate-300|text-base leading-8 text-slate-300|text-sm leading-7 text-slate-300|text-sm leading-6 text-slate-300/.test(presentation),
);

console.log(`[PRESENTATION QA] ${failures ? 'FAILED' : 'PASSED'} with ${failures} failure(s).`);
if (failures) process.exitCode = 1;
