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

const thoughtIdeas = [
  {
    title: "What building my first AI app taught me",
    blurb:
      "A practical look at what changed for me once I moved from talking about AI to actually shipping a product.",
  },
  {
    title: "Why focused AI products may win",
    blurb:
      "Sometimes a smaller, cleaner experience can be more useful than a broad general-purpose tool.",
  },
  {
    title: "From operator to builder",
    blurb:
      "What I am learning as I move from leading at scale to building products from scratch.",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Apps", href: "#apps" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];

const personalTags = [
  "Builder",
  "Strategist",
  "Curious mind",
  "AI explorer",
  "Systems thinker",
  "Traveler",
];

export function SiteShell() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0">
            <div className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              Nimish Raote
            </div>
            <div className="text-sm text-slate-300">
              Operator, builder, and AI product explorer
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0b1020]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.14),_transparent_25%)]" />
        <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-16 top-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-20">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                AI, strategy, and real-world usefulness
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Building thoughtful AI products with an operator&apos;s mindset.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I have spent my career building and running complex businesses at scale across operations,
                strategy, technology, and commercial execution. I am now building public-facing AI
                products that are practical, clear, and genuinely useful.
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
                  <div className="text-2xl font-bold text-white">AI</div>
                  <div className="mt-1 text-sm text-slate-300">Product portfolio in progress</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">Ops</div>
                  <div className="mt-1 text-sm text-slate-300">Built with a systems mindset</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-transparent to-violet-500/30 blur-xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/8 p-3 backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/40">
                  <Image
                    src="/nimish.jpg"
                    alt="Nimish Raote"
                    width={900}
                    height={1100}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-sky-200">A little more about me</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    I like building useful things, thinking in systems, and exploring where AI can make
                    everyday life simpler, clearer, and more thoughtful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-[#f7f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/nimish.jpg"
                  alt="Nimish Raote portrait"
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {personalTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                About
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A business builder now applying the same mindset to AI products.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                I am a business and operations leader with a background across technology, digital
                transformation, strategy, and large-scale commercial execution. Over the years, I have
                worked across product, operations, client leadership, and business building.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                That experience shaped how I think: start with the real problem, keep the solution
                practical, and build systems that people can actually use. My interest is not in building
                AI for the sake of novelty. It is in building tools that reduce friction, clarify
                information, and help people act faster and more confidently.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                By day, I have spent years operating at scale. Outside that, I am increasingly drawn to
                building useful products from scratch and sharing the thinking behind them.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Technology",
                  "Operations",
                  "Strategy",
                  "AI-enabled product thinking",
                  "Global business leadership",
                  "Practical problem solving",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-sm font-medium text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Apps
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A growing portfolio of public-facing AI tools.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Each app is built to solve a real problem in a simple and accessible way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {apps.map((app) => (
              <div
                key={app.name}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-violet-50 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="h-44 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.24),_transparent_28%),linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e1b4b_100%)] p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                    Featured App
                  </div>
                  <div className="mt-6 max-w-sm text-3xl font-bold text-white">{app.name}</div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">{app.description}</p>
                  <div className="mt-4 text-sm text-slate-500">Built with {app.stack}</div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={app.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Live App
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                Coming Next
              </div>
              <div className="mt-3 text-2xl font-bold text-slate-900">More apps coming soon</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                I am actively building more tools focused on explanation, decision support, and everyday
                usefulness. Future products will be added here over time.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["ImageExplainer", "DecisionHelper", "TravelInterpreter"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="thoughts" className="border-t border-slate-200 bg-[#eef4ff]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Thoughts
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ideas, lessons, and reflections from building and learning.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This is where I will share reflections on AI, product building, strategy, and what I am
              learning along the way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {thoughtIdeas.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="text-sm font-semibold text-sky-700">
                  0{index + 1}
                </div>
                <div className="mt-3 text-xl font-bold text-slate-900">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-[#0b1020]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Contact
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let us connect.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                If you would like to connect, discuss ideas, or learn more about the products I am
                building, feel free to reach out.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
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
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
            Nimish Raote · Building practical AI tools for real-world use
          </div>
        </div>
      </section>
    </main>
  );
}