import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nimish Raote",
  description: "Operator, builder, and AI product explorer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
