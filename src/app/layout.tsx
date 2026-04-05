import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroLuck — Маркетинговые системы для бизнеса",
  description:
    "Строим маркетинговые и коммерческие системы под ключ. Стратегия, команда, воронки, аналитика. Бесплатный разбор за 15 минут.",
  openGraph: {
    title: "ZeroLuck — Маркетинговые системы для бизнеса",
    description:
      "Строим маркетинговые и коммерческие системы под ключ. Стратегия, команда, воронки, аналитика. Бесплатный разбор за 15 минут.",
    type: "website",
    url: "https://zeroluck.solutions",
    images: [
      {
        url: "https://zeroluck.solutions/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZeroLuck — Маркетинговые системы для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroLuck — Маркетинговые системы для бизнеса",
    description:
      "Строим маркетинговые и коммерческие системы под ключ. Стратегия, команда, воронки, аналитика. Бесплатный разбор за 15 минут.",
    images: ["https://zeroluck.solutions/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise-overlay">{children}</body>
    </html>
  );
}
