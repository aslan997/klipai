import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KlipAI",
  description: "AI receipts. Simple crypto. Smart control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
