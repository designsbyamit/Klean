import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klean Design System",
  description: "A semantic, compositional design system built as a laboratory for generative UI."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
