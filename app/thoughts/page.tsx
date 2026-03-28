import Link from "next/link";

const thoughts = [
  {
    number: "01",
    title: "What Building My First AI App Taught Me",
    excerpt:
      "A reflection on building InsightLens, waking up old technical muscles, and learning by doing.",
    href: "/thoughts/what-building-my-first-ai-app-taught-me",
  },
  {
    number: "02",
    title: "Why Building Small Things Still Matters, Even for Leaders",
    excerpt: "Why leaders should stay close to making, not just directing.",
    href: "/thoughts/why-building-small-things-still-matters-even-for-leaders",
  },
  {
    number: "03",
    title: "The Hidden Job of Leadership Is Looking Calmer Than You Feel",
    excerpt:
      "On emotional control, fluent executive language, and keeping the room from getting worse.",
    href: "/thoughts/the-hidden-job-of-leadership-is-looking-calmer-than-you-feel",
  },
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
              Notes on leadership, building, work, and curiosity.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A growing archive of writing on products, leadership, technology, and the parts of work
              that are harder to say in meetings.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#171222]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.09),_transparent_24%),radial-gradient(circle_at_center,_rgba(244,114,182,0.07),_transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur">
            <div className="divide-y divide-white/10">
              {thoughts.map((thought) => (
                <Link
                  key={thought.number}
                  href={thought.href}
                  className="group block px-6 py-7 transition hover:bg-white/5 sm:px-8"
                >
                  <div className="grid gap-4 sm:grid-cols-[64px_1fr] sm:gap-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
                      {thought.number}
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-white transition group-hover:text-sky-200 sm:text-3xl">
                        {thought.title}
                      </h2>
                      <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">
                        {thought.excerpt}
                      </p>
                      <div className="mt-4 text-sm font-semibold text-amber-300">
                        Read article
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}