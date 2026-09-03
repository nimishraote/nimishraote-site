import Image from "next/image";
import Link from "next/link";

const secondaryApps = [
  {
    name: "MoneyWise",
    description:
      "An AI-powered financial literacy app that helps young adults build confidence with money through a personalized starting plan, guided lessons, and practical next steps.",
    stack: "Next.js, Vercel, Supabase, GitHub, OpenAI",
    liveHref: "https://moneywise-mzo6.vercel.app/",
    imageAlt: "MoneyWise financial literacy app interface",
    previewPosition: "top",
  },
  {
    name: "InsightLens",
    description:
      "An AI visual analysis tool that turns charts and graphs into clear takeaways, unusual points, and useful follow-up questions.",
    stack: "Next.js, Vercel, Supabase, GitHub, OpenAI",
    liveHref: "https://insightlens-red.vercel.app/",
    imageAlt: "InsightLens chart analysis interface",
    previewPosition: "center",
  },
  {
    name: "You Are the COO",
    description:
      "A decision-based executive simulation where you run a company through high-pressure choices across clients, budgets, people, product launches, and risk.",
    stack: "Next.js, Vercel, GitHub, Framer Motion",
    liveHref: "https://you-are-the-coo.vercel.app/",
    imageAlt: "You Are the COO executive simulation interface",
    previewPosition: "bottom",
  },
];

const thoughtTeasers = [
  {
    title: "What Building My First AI App Taught Me",
    note: "Now live.",
    href: "/thoughts/what-building-my-first-ai-app-taught-me",
  },
  {
    title: "Why Building Small Things Still Matters, Even for Leaders",
    note: "Now live.",
    href: "/thoughts/why-building-small-things-still-matters-even-for-leaders",
  },
  {
    title: "The Hidden Job of Leadership Is Looking Calmer Than You Feel",
    note: "Now live.",
    href: "/thoughts/the-hidden-job-of-leadership-is-looking-calmer-than-you-feel",
  },
];

const navItems = [
  { label: "About", href: "#about", external: false },
  { label: "Apps", href: "#apps", external: false },
  { label: "Thoughts", href: "/thoughts", external: true },
  { label: "Contact", href: "#contact", external: false },
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
              {navItems.map((item) =>
                item.external ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center transition hover:text-white"
                  >
                    {item.label}
                  </a>
                )
              )}
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
              Products, ideas, and experiments
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              A place for the things I build.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I spend a lot of my time building teams and operating large, complex businesses at global
              scale. Outside of that, I like building products, exploring ideas, and learning in public.
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
                  I have spent most of my career helping teams take big, messy goals and turn them into
                  something that can actually run. I started at Microsoft, spent many years at Ogilvy,
                  then TikTok, and now work at Fanatics across operating leadership, strategy, and execution.
                </p>

                <p>
                  This site is mostly a place for things I am building and thinking about. Some are work
                  related. Some are personal. Some are just experiments because I wanted to see if I could
                  make them.
                </p>

                <p>
                  I grew up in India and now live in Hoboken with my wife, daughter, and our cat Theo,
                  who very much has his own personality. Outside of work, I enjoy mobile games, Xbox,
                  travel, and getting a feel for different cultures, places, and rhythms of life. A lot
                  of what inspires me comes from that blend of curiosity, systems thinking, and the small
                  details of everyday life.
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
              Products and experiments I have taken from idea to working app.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I build these to learn by doing, solve something useful, and understand what it takes to
              turn an idea into a real product.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-sky-300/20 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                    Flagship project
                  </span>
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Live
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Sports HQ
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  A personal sports platform that brings live scores, schedules, standings, news, tennis
                  draws, cricket scorecards, streaming, tickets, and AI-powered sports context into one place.
                </p>
                <div className="mt-5 text-sm text-slate-400">
                  Built with Next.js, Vercel, Neon, GitHub, and OpenAI
                </div>

                <div className="mt-7">
                  <a
                    href="https://sports.nimishraote.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Open Sports HQ
                  </a>
                </div>
              </div>

              <a
                href="https://sports.nimishraote.com/"
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[320px] overflow-hidden border-t border-white/10 bg-[#07111f] lg:min-h-[430px] lg:border-l lg:border-t-0"
                aria-label="Open Sports HQ"
              >
                <img
                  src="https://sports.nimishraote.com/option1-athletes-hero.webp"
                  alt="Sports HQ athletes hero"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/35 via-transparent to-transparent" />
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {secondaryApps.map((app) => (
              <article
                key={app.name}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 shadow-[0_10px_35px_rgba(0,0,0,0.20)] backdrop-blur"
              >
                <a
                  href={app.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group block aspect-[16/9] overflow-hidden border-b border-white/10 bg-white"
                  aria-label={`Open ${app.name}`}
                >
                  <div
                    role="img"
                    aria-label={app.imageAlt}
                    className="h-full w-full bg-no-repeat transition duration-500 group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: "url('/app-previews.webp')",
                      backgroundSize: "100% 300%",
                      backgroundPosition: `center ${app.previewPosition}`,
                    }}
                  />
                </a>

                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Live app
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">{app.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{app.description}</p>
                  <div className="mt-3 text-xs leading-5 text-slate-500">Built with {app.stack}</div>
                  <div className="mt-5">
                    <a
                      href={app.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-sky-200 transition hover:text-white"
                    >
                      Open app →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="thoughts"
        className="relative overflow-hidden border-t border-white/10 bg-[#1a1427]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.09),_transparent_28%),radial-gradient(circle_at_center,_rgba(236,72,153,0.07),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(251,191,36,0.06),_transparent_20%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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

            <div>
              <Link
                href="/thoughts"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Read all thoughts
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {thoughtTeasers.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.20)] backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="text-sm font-semibold text-rose-300">0{index + 1}</div>
                <div className="mt-3 text-xl font-bold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
              </Link>
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
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Say hello
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The easiest place to reach me is on LinkedIn.
            </p>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/nimish-raote-1342697"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
