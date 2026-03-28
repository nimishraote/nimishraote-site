"use client";

import { useEffect, useMemo, useState } from "react";

type ReactionKey = "insightful" | "very_true" | "funny";

type ReactionCounts = {
  insightful: number;
  very_true: number;
  funny: number;
};

type ReactionBarProps = {
  articleId: string;
};

const STORAGE_KEY = "nimish-thought-reactions-v1";

const reactionConfig: Array<{ key: ReactionKey; label: string; emoji: string }> = [
  { key: "insightful", label: "Insightful", emoji: "💡" },
  { key: "very_true", label: "Very true", emoji: "✅" },
  { key: "funny", label: "Funny", emoji: "🙂" },
];

const emptyCounts: ReactionCounts = {
  insightful: 0,
  very_true: 0,
  funny: 0,
};

function getStoredReactions(): Record<string, ReactionKey> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw) as Record<string, ReactionKey>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveStoredReaction(articleId: string, reactionKey: ReactionKey) {
  if (typeof window === "undefined") {
    return;
  }

  const current = getStoredReactions();
  current[articleId] = reactionKey;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function ReactionBar({ articleId }: ReactionBarProps) {
  const [counts, setCounts] = useState<ReactionCounts>(emptyCounts);
  const [selectedReaction, setSelectedReaction] = useState<ReactionKey | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const stored = getStoredReactions();
    if (stored[articleId]) {
      setSelectedReaction(stored[articleId]);
    }

    async function loadCounts() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`/api/reactions?articleId=${encodeURIComponent(articleId)}`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Could not load reactions.");
        }

        const data = (await response.json()) as { counts?: ReactionCounts };

        if (isMounted && data.counts) {
          setCounts(data.counts);
        }
      } catch {
        if (isMounted) {
          setError("Reactions could not load right now.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadCounts();

    return () => {
      isMounted = false;
    };
  }, [articleId]);

  const hasReacted = useMemo(() => selectedReaction !== null, [selectedReaction]);

  async function handleReaction(reactionKey: ReactionKey) {
    if (hasReacted || isSubmitting) {
      return;
    }

    const previousCounts = counts;
    const optimisticCounts = {
      ...counts,
      [reactionKey]: counts[reactionKey] + 1,
    };

    setCounts(optimisticCounts);
    setSelectedReaction(reactionKey);
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/reactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleId, reactionKey }),
      });

      if (!response.ok) {
        throw new Error("Could not save reaction.");
      }

      const data = (await response.json()) as { counts?: ReactionCounts };

      if (data.counts) {
        setCounts(data.counts);
      }

      saveStoredReaction(articleId, reactionKey);
    } catch {
      setCounts(previousCounts);
      setSelectedReaction(null);
      setError("Your reaction did not go through. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-white">React to this article</div>
          <div className="mt-1 text-sm text-slate-400">
            {hasReacted
              ? "Thanks. Your reaction has been counted."
              : "Pick one reaction. Everyone can see the totals."}
          </div>
        </div>

        {isLoading ? <div className="text-sm text-slate-400">Loading reactions...</div> : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {reactionConfig.map((reaction) => {
          const isSelected = selectedReaction === reaction.key;

          return (
            <button
              key={reaction.key}
              type="button"
              onClick={() => handleReaction(reaction.key)}
              disabled={hasReacted || isSubmitting}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                isSelected
                  ? "border-sky-300/40 bg-sky-400/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
              } ${hasReacted || isSubmitting ? "cursor-default" : "cursor-pointer"}`}
            >
              <span aria-hidden="true">{reaction.emoji}</span>
              <span>{reaction.label}</span>
              <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs text-slate-100">
                {counts[reaction.key]}
              </span>
            </button>
          );
        })}
      </div>

      {error ? <div className="mt-3 text-sm text-rose-300">{error}</div> : null}
    </div>
  );
}