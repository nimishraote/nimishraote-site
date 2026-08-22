"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

const PROJECTS: Record<string, string> = {
  "moneywise-mzo6.vercel.app": "MoneyWise",
  "insightlens-red.vercel.app": "InsightLens",
  "you-are-the-coo.vercel.app": "You Are the COO",
};

function capture(event: string, properties: Record<string, string | number | boolean> = {}) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  posthog.capture(event, properties);
}

function destinationType(href: string) {
  if (href.startsWith("#")) return "section";
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("/")) return "internal";
  return "external";
}

export default function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      session_recording: {
        maskAllInputs: true,
      },
    });
  }, []);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

    capture("site_page_view", {
      path: pathname || "/",
      title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

    const visitKey = "nimishraote_first_visit";
    const firstVisit = window.localStorage.getItem(visitKey);
    if (firstVisit) {
      capture("return_visit", { first_visit: firstVisit });
    } else {
      window.localStorage.setItem(visitKey, new Date().toISOString());
      capture("first_visit");
    }

    const engagedTimer = window.setTimeout(() => {
      capture("engaged_30_seconds", { path: window.location.pathname });
    }, 30_000);

    const reached = new Set<number>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((window.scrollY / scrollable) * 100);
      [25, 50, 75, 90].forEach((milestone) => {
        if (pct >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          capture("scroll_depth", {
            percent: milestone,
            path: window.location.pathname,
          });
        }
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest("a,button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!element) return;

      const label = (element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120) || "unlabeled";
      const href = element instanceof HTMLAnchorElement ? element.getAttribute("href") || "" : "";
      const section = element.closest("section")?.id || "header_or_other";

      capture("site_interaction", {
        label,
        href,
        section,
        destination_type: href ? destinationType(href) : "button",
        path: window.location.pathname,
      });

      if (href) {
        try {
          const url = new URL(href, window.location.origin);
          const project = PROJECTS[url.hostname];
          if (project) {
            capture("project_opened", {
              project,
              section,
              path: window.location.pathname,
            });
          }
        } catch {
          // Ignore malformed hrefs. The generic interaction event above is still captured.
        }

        if (href === "#contact" || href.startsWith("mailto:")) {
          capture("contact_interest", {
            source_label: label,
            section,
            path: window.location.pathname,
          });
        }

        if (href.startsWith("/thoughts")) {
          capture("thought_opened", {
            title: label,
            href,
            path: window.location.pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      window.clearTimeout(engagedTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
