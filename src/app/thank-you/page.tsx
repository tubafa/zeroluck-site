"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import QuizProvider from "@/components/QuizProvider";
import QuizModal from "@/components/QuizModal";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import CursorTrail from "@/components/CursorTrail";

function ThankYouContent() {
  const [telegramLink, setTelegramLink] = useState("https://t.me/zeroluck");

  useEffect(() => {
    (window as any).dataLayer?.push({ event: "booking_confirmed" });
    (window as any).fbq?.("track", "Purchase");

    try {
      const raw = localStorage.getItem("zeroluck_lead");
      if (raw) {
        const lead = JSON.parse(raw);
        if (lead.id) {
          setTelegramLink(`https://t.me/zeroluck?start=${lead.id}`);
          console.log("Lead data:", lead);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-[640px] text-center">
        {/* SECTION 1 — Confirmation */}
        <div className="flex justify-center mb-8">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="34" stroke="#00FF88" strokeWidth="3" />
            <path
              d="M22 36L32 46L50 26"
              stroke="#00FF88"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1
          className="font-console font-bold text-white uppercase mb-5 heading-glow"
          style={{ fontSize: "clamp(26px, 4vw, 36px)", lineHeight: 1.2 }}
        >
          ОТЛИЧНО, МЫ ВАС ЖДЁМ!
        </h1>

        <p
          className="font-console text-white mb-16"
          style={{ fontSize: "clamp(16px, 2.5vw, 18px)", lineHeight: 1.6 }}
        >
          Проверьте почту и подтвердите встречу. Напоминание придёт за 1 час.
        </p>

        {/* SECTION 2 — CTA to bot */}
        <div
          className="border-glow text-left mb-8"
          style={{ padding: 32 }}
        >
          <h2
            className="font-console font-bold text-white uppercase mb-6"
            style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}
          >
            Пока ждёте — заберите материалы
          </h2>
          <ul className="space-y-4">
            <li
              className="font-console text-white flex items-start gap-3"
              style={{ fontSize: "clamp(16px, 2.5vw, 18px)" }}
            >
              <span className="shrink-0 mt-0.5" style={{ color: "#001FFF" }}>///</span>
              Мини-аудит по вашим ответам — отправим до встречи
            </li>
            <li
              className="font-console text-white flex items-start gap-3"
              style={{ fontSize: "clamp(16px, 2.5vw, 18px)" }}
            >
              <span className="shrink-0 mt-0.5" style={{ color: "#001FFF" }}>///</span>
              PDF: 7 ошибок при построении отдела маркетинга и продаж
            </li>
          </ul>
        </div>

        {/* Button + QR inline on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-3">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-console font-bold uppercase tracking-wider text-white nav-cta-pulse glow-blue cta-btn transition-all duration-200 hover:brightness-125 text-center"
            style={{
              padding: "18px 40px",
              background: "#001FFF",
              fontSize: "clamp(16px, 2.5vw, 18px)",
            }}
          >
            ЗАБРАТЬ МАТЕРИАЛЫ
          </a>
          <QRCodeSVG
            value={telegramLink}
            size={120}
            bgColor="transparent"
            fgColor="#FFFFFF"
            level="M"
          />
        </div>

        <p className="font-console" style={{ fontSize: 14, color: "#666" }}>
          Бот отправит оба материала. Без спама.
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <QuizProvider>
      <CursorGlow />
      <CursorTrail />
      <Navbar hideCTA />
      <ThankYouContent />
      <QuizModal />
    </QuizProvider>
  );
}
