import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUGYEONG HYEON | UX Designer Portfolio",
  description:
    "A minimal UX designer portfolio showcasing selected product design work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
