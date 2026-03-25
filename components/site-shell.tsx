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

const comingSoonThoughts = [
  "What building my first AI app taught me",
  "Why focused AI products may win",
  "From operator to builder",
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
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0">
            <div className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              Nimish Raote
            </div>
            <div className="text-sm text-slate-300">
              Operator, builder, and curious explorer
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-slate-200">
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

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="mt-1 text-sm text-slate-300">Live public app</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">More</div>
                <div className="mt-1 text-sm text-slate-300">Ideas and experiments to come</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">Side</div>
                <div className="mt-1 text-sm text-slate-300">Built with curiosity and craft</div>
              </div>
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
              Writing and reflections are coming soon.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This section will grow over time with notes, ideas, and reflections across work, products,
              AI, culture, and whatever else I find worth thinking about.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {comingSoonThoughts.map((item, index) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.20)] backdrop-blur"
              >
                <div className="text-sm font-semibold text-rose-300">0{index + 1}</div>
                <div className="mt-3 text-xl font-bold text-white">{item}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">Coming soon.</p>
              </div>
            ))}
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