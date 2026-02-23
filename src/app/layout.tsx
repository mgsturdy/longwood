import type { Metadata } from "next";
import { playfairDisplay, inter, dmSerifDisplay, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio 1299 Previews — Chelsea at Longwood",
  description: "Preview landing page concepts for Chelsea at Longwood.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
