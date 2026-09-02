import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SiteAnalytics from "../components/site-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nimishraote.com"),
  title: "Nimish Raote",
  description: "Personal website and product portfolio of Nimish Raote, including Sports HQ, MoneyWise, InsightLens and You Are the COO.",
  authors: [{ name: "Nimish Raote", url: "https://nimishraote.com" }],
  creator: "Nimish Raote",
  keywords: ["Nimish Raote", "Sports HQ", "product builder", "AI apps", "operations", "strategy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SiteAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
