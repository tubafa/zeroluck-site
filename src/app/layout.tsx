import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroLuck — Маркетинговые системы для бизнеса",
  description:
    "Через 90 дней ваш маркетинг начнёт приносить деньги. Без вашего участия. Бесплатный разбор за 15 минут.",
  openGraph: {
    title: "ZeroLuck — Маркетинговые системы для бизнеса",
    description:
      "Через 90 дней ваш маркетинг начнёт приносить деньги. Без вашего участия. Бесплатный разбор за 15 минут.",
    type: "website",
    url: "https://zeroluck.solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroLuck — Маркетинговые системы для бизнеса",
    description:
      "Через 90 дней ваш маркетинг начнёт приносить деньги. Без вашего участия. Бесплатный разбор за 15 минут.",
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
