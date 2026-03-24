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
  "What building my first AI app taught me",
  "Why simple AI products may win over general-purpose experiences",
  "Moving from operator to builder",
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Apps", href: "#apps" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];

export function SiteShell() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <div className="text-xl font-bold tracking-tight text-slate-900">Nimish Raote</div>
            <div className="text-sm text-slate-500">Operator, builder, and AI product explorer</div>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Welcome</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              I build practical tools at the intersection of AI, strategy, and real-world usefulness.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              I have spent my career building and running complex businesses at scale across operations,
              strategy, technology, and commercial execution. I am now also building public-facing AI
              products with the same focus on clarity, usefulness, and practical value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apps"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View Apps
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-sky-700">Featured App</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">InsightLens</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              InsightLens helps people understand charts and graphs quickly and clearly. Upload a chart image and get structured insights in plain language, including key takeaways, risks, unusual points, and smart follow-up questions.
            </p>
            <a
              href="https://insightlens-akg9ozn38-nimishraotes-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-gradient-to-r from-sky-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Open InsightLens
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">About</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">A business builder now applying the same mindset to AI products.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              I am a business and operations leader with a background across technology, digital transformation, strategy, and large-scale commercial execution. Over the years, I have worked across product, operations, client leadership, and business building. That experience shaped how I think: start with the real problem, keep the solution practical, and build systems that people can actually use.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              My interest is not in building AI for the sake of novelty. It is in building tools that are useful, simple, and grounded in real human needs. I care about products that reduce friction, clarify information, and help people act faster and more confidently.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Technology", "Operations", "Strategy", "AI-enabled product thinking", "Global business leadership"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Apps</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">A growing portfolio of public-facing AI tools.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Each app is built to solve a real problem in a simple and accessible way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {apps.map((app) => (
              <div key={app.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">{app.name}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{app.description}</p>
                <div className="mt-4 text-sm text-slate-500">Built with {app.stack}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={app.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    Live App
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">More apps coming soon</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                I am actively building more tools focused on explanation, decision support, and everyday usefulness. Future products will be added here over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="thoughts" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Thoughts</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Ideas, lessons, and reflections from building and learning.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This is where I will share reflections on AI, product building, strategy, and what I am learning along the way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {thoughtIdeas.map((idea) => (
              <div key={idea} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Coming soon</div>
                <div className="mt-3 text-xl font-semibold leading-8 text-slate-900">{idea}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Let us connect.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              If you would like to connect, discuss ideas, or learn more about the products I am building, feel free to reach out.
            </p>
            <div className="mt-6 space-y-2 text-base text-slate-200">
              <div>Email: nimishar@hotmail.com</div>
              <div>LinkedIn: add your LinkedIn URL here</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
