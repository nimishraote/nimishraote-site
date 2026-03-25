import Link from "next/link";

const article = {
  title: "What Building My First AI App Taught Me",
  intro:
    "The world is changing very fast right now. AI is starting to reshape how people work, create, solve problems, and build businesses. I wanted to understand that shift in a real way, not just by using tools casually, but by building something myself.",
  sections: [
    "Throughout my career, I have often been drawn to moments where something needed to be built from scratch. Not just managed once it existed, but shaped early, when there was still ambiguity and when the right systems, structure, and direction had to be created.",
    "At TikTok, I had the chance to help build the operating foundations at a time when the business was still scaling quickly and many things were still taking shape. What always interested me most was not process for its own sake. It was how to design an operating model that could support growth, bring clarity to complexity, and help teams move with more focus and confidence. For me, that kind of work has always been strategic. It is about seeing what needs to exist before it fully exists, then helping build it in a way that can scale.",
    "I saw something similar earlier in my career at Ogilvy, when I helped lead and launch the first major tech project at an advertising agency that had never launched something of that scale before. The project was TimeWarnerCable.com, which was later taken over by Charter Communications. It was a high-scale and high-visibility program, and it required real depth in technology, product thinking, and execution. That experience stayed with me because it showed me that complex systems can be built successfully even in places not known for engineering, if the right leadership, structure, and learning mindset are in place.",
    "That same instinct came back to me with AI. I realized that if I truly wanted to understand where this world is going, it was not enough to only prompt models or experiment casually. I wanted to build a real product from scratch. Something simple, public-facing, and useful. That is what led me to build InsightLens.",
    "What surprised me most was how energizing the process felt. In building it, old technical muscles started waking up again. Earlier in my career, I had worked much closer to technology and code. Over time, as my roles became more centered on business leadership, scale, and strategy, that layer became quieter. It never disappeared, but it definitely went dormant. This project brought it back to life.",
    "I had to think through the architecture from the ground up. How the front end would work. How the app would be deployed. How the code would be managed in GitHub. How Vercel, Supabase, and the OpenAI platform would connect to each other. How information would move through the system, from user input to model response to app output. How to make the product simple on the surface while keeping the structure underneath clean and reliable. It was not about building something huge. It was about building something real and learning by doing.",
    "That process reminded me of something important. A lot of growth comes from stepping back into spaces where you are no longer fully fluent, but willing to learn again. It made me feel lively, stretched, and honestly more playful than I have felt in a while. There was something deeply satisfying about moving from idea to working product, and seeing that what looked intimidating at first became manageable once I committed to it step by step.",
    "This project is small in the grand scheme of things, but it meant a lot to me. It reminded me that I do not have to choose between strategic leadership and building. The two can feed each other. In many ways, the same mindset that helps build organizations and operating systems can also help build products.",
    "More than anything, this feels like a beginning. Building this first app has inspired me to do much more in this space. Not because I want to suddenly become something I am not, but because I can feel how important this shift is, and I want to engage with it in a real way. I want to keep learning, keep building, and keep exploring what becomes possible when strategy, technology, and curiosity come together.",
  ],
};

const moreThoughts = [
  "Why focused AI products may win",
  "From operator to builder",
];

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-[#120f1e] text-slate-100">
      <header className="border-b border-white/10 bg-[#0b1020]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <Link
            href="/"
            className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent"
          >
            Nimish Raote
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0b1020]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.30),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.24),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.10),_transparent_22%)]" />
        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-16 sm:pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-amber-300/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Thoughts
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {article.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#171222]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.09),_transparent_24%),radial-gradient(circle_at_center,_rgba(244,114,182,0.07),_transparent_28%)]" />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-16 lg:grid-cols-[1fr_280px]">
          <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8">
            <div className="space-y-6 text-base leading-8 text-slate-300">
              {article.sections.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.20)] backdrop-blur">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
              More to come
            </div>
            <div className="mt-4 space-y-4">
              {moreThoughts.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-amber-300">0{index + 2}</div>
                  <div className="mt-2 text-base font-semibold text-white">{item}</div>
                  <div className="mt-2 text-sm text-slate-300">In progress.</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}