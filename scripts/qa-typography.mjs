import fs from 'node:fs';

let failures = 0;
const read = (path) => fs.readFileSync(path, 'utf8');
const check = (name, ok) => {
  if (ok) console.log(`[TYPOGRAPHY QA PASS] ${name}`);
  else {
    failures += 1;
    console.error(`[TYPOGRAPHY QA FAIL] ${name}`);
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

check(
  'Legacy ad-hoc supporting-copy size/line-height pairs are removed from presentation surfaces',
  !/text-lg leading-8 text-slate-300|text-base leading-8 text-slate-300|text-sm leading-7 text-slate-300|text-sm leading-6 text-slate-300/.test(presentation),
);

console.log(`[TYPOGRAPHY QA] ${failures ? 'FAILED' : 'PASSED'} with ${failures} failure(s).`);
if (failures) process.exitCode = 1;
