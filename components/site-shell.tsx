import Image from "next/image";

const apps = [
  {
    name: "InsightLens",
    description:
      "AI chart and graph analysis made simple. Upload a chart image and get clear insights, unusual points, and smart follow-up questions.",
    stack: "Next.js, Vercel, Supabase, GitHub, OpenAI",
    liveHref: "https://insightlens-akg9ozn38-nimishraotes-projects.vercel.app/",
  },
];

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

const thoughtTeasers = [
  {
    title: "Why focused AI products may win",
    note: "Still in the lab.",
  },
  {
    title: "From operator to builder",
    note: "Work in progress, with strong opinions forming.",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Apps", href: "#apps" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];

export function SiteShell() {
  return (
    <main className="min-h-screen bg-[#120f1e] text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                Nimish Raote
              </div>
              <div className="text-sm text-slate-300">
                Operator, builder, and curious explorer
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200 sm:justify-end">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0b1020]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.30),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.24),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.10),_transparent_22%)]" />
        <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-16 top-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-20">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
              Strategy, systems, products, and side quests
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              A home for ideas, experiments, and products I build outside the day job.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I have spent my career building and running complex businesses at scale across operations,
              strategy, technology, and commercial execution. This site is a more personal space for the
              things I explore outside of work, including AI products, ideas, and creative side quests.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apps"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View Apps
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden border-t border-white/10 bg-[#171222]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.09),_transparent_24%),radial-gradient(circle_at_center,_rgba(244,114,182,0.07),_transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur">
              <div className="mx-auto max-w-[320px] overflow-hidden rounded-[1.5rem] ring-1 ring-amber-300/20">
                <Image
                  src="/nimish.jpg"
                  alt="Nimish Raote portrait"
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                About
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A little more about me
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Professionally, I have spent years working across technology, operations, strategy,
                  and large-scale business leadership. My path has included Microsoft, Ogilvy, and now
                  TikTok, where I spend my time running business operations and helping complex systems
                  work better at scale.
                </p>

                <p>
                  Outside of work, I enjoy building things from scratch, exploring new ideas, and using
                  technology in a more playful and creative way. That is part of what this site is for.
                  It is not meant to be a formal corporate profile. It is more a living space for
                  experiments, products, thoughts, and whatever I happen to be curious about next.
                </p>

                <p>
                  I am originally from India and now live in Hoboken with my wife, daughter, and our cat
                  Theo, who very much has his own personality. Outside of work, I enjoy mobile games,
                  Xbox, travel, and getting a feel for different cultures, places, and rhythms of life.
                  A lot of what inspires me comes from that blend of curiosity, systems thinking, and
                  the small details of everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="apps"
        className="relative overflow-hidden border-t border-white/10 bg-[#140f20]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_24%),radial-gradient(circle_at_center,_rgba(168,85,247,0.10),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.07),_transparent_22%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Apps
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A growing portfolio of public-facing experiments and tools.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Some are practical. Some are exploratory. All of them come from a place of curiosity,
              usefulness, and wanting to make something real.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {apps.map((app) => (
              <div
                key={app.name}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur"
              >
                <div className="h-44 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.35),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.24),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.18),_transparent_24%),linear-gradient(135deg,#0f172a_0%,#111827_40%,#312e81_100%)] p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                    Featured App
                  </div>
                  <div className="mt-6 max-w-sm text-3xl font-bold text-white">{app.name}</div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-300">{app.description}</p>
                  <div className="mt-4 text-sm text-slate-400">Built with {app.stack}</div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={app.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      Live App
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[2rem] border border-dashed border-white/15 bg-gradient-to-br from-white/7 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
                Coming Next
              </div>
              <div className="mt-3 text-2xl font-bold text-white">More apps coming soon</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I am gradually building out a small portfolio over time. Some ideas are already taking
                shape. Others are still just sketches in my head.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["ImageExplainer", "DecisionHelper", "TravelInterpreter"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="thoughts"
        className="relative overflow-hidden border-t border-white/10 bg-[#1a1427]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.09),_transparent_28%),radial-gradient(circle_at_center,_rgba(236,72,153,0.07),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(251,191,36,0.06),_transparent_20%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Thoughts
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Notes and reflections from building, learning, and staying curious.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              A few thoughts are starting to take shape. This section will slowly grow into a place for
              writing about products, technology, work, and whatever else I find worth exploring.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
                Article 01
              </div>
              <h3 className="mt-3 max-w-3xl text-2xl font-bold text-white sm:text-3xl">
                {article.title}
              </h3>
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
                {article.intro}
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
                {article.sections.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              {thoughtTeasers.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.20)] backdrop-blur"
                >
                  <div className="text-sm font-semibold text-rose-300">
                    0{index + 2}
                  </div>
                  <div className="mt-3 text-xl font-bold text-white">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#0b1020]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_22%),radial-gradient(circle_at_center,_rgba(244,114,182,0.08),_transparent_20%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Contact
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let us connect.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                If you would like to connect, discuss ideas, or simply say hello, feel free to reach
                out.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 backdrop-blur">
              <div className="space-y-4 text-sm text-slate-200">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</div>
                  <a
                    href="mailto:nimishar@hotmail.com"
                    className="mt-1 inline-block text-base text-white hover:text-sky-300"
                  >
                    nimishar@hotmail.com
                  </a>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/nimish-raote-1342697/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-base text-white hover:text-sky-300"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
            Nimish Raote · Work, ideas, products, and side quests
          </div>
        </div>
      </section>
    </main>
  );
}