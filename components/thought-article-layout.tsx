import Link from "next/link";
import { ReactNode } from "react";

import { ReactionBar } from "./reaction-bar";

type ThoughtArticleLayoutProps = {
  articleId: string;
  number: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function ThoughtArticleLayout({
  articleId,
  number,
  title,
  intro,
  children,
}: ThoughtArticleLayoutProps) {
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
            href="/thoughts"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to Thoughts
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0b1020]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.30),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.24),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.10),_transparent_22%)]" />
        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-16 sm:pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-amber-300/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Article {number}
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#171222]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.09),_transparent_24%),radial-gradient(circle_at_center,_rgba(244,114,182,0.07),_transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl px-5 py-16">
          <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur sm:p-8">
            <div className="space-y-6 text-base leading-8 text-slate-300">{children}</div>
            <ReactionBar articleId={articleId} />
          </article>
        </div>
      </section>
    </main>
  );
}