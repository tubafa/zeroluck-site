"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import QuizProvider from "@/components/QuizProvider";
import QuizModal from "@/components/QuizModal";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import CursorTrail from "@/components/CursorTrail";

function ThankYouContent() {
  const [telegramLink, setTelegramLink] = useState("https://t.me/zeroluck");

  useEffect(() => {
    // Push dataLayer event
    (window as any).dataLayer?.push({ event: "booking_confirmed" });

    // Read lead ID from localStorage
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
      // ignore parse errors
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-[640px] text-center">
        {/* Green checkmark */}
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

        {/* Title */}
        <h1
          className="font-console font-bold text-white uppercase mb-4 heading-glow"
          style={{ fontSize: "clamp(26px, 4vw, 36px)", lineHeight: 1.2 }}
        >
          ОТЛИЧНО, МЫ ВАС ЖДЁМ!
        </h1>

        {/* Subtitle */}
        <p
          className="font-console text-white mb-3"
          style={{ fontSize: "clamp(16px, 2.5vw, 18px)" }}
        >
          Разбор запланирован. Пока ждёте — подготовьтесь.
        </p>

        {/* Reminder moved up — accent line */}
        <p
          className="font-console mb-12"
          style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#001FFF" }}
        >
          ⏰ Напоминание придёт за 1 час до разбора
        </p>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div
            className="text-left font-console text-white border-glow"
            style={{
              fontSize: "clamp(16px, 2.5vw, 18px)",
              padding: 24,
            }}
          >
            📋 Мини-аудит по вашим ответам — отправим до встречи
          </div>
          <div
            className="text-left font-console text-white border-glow"
            style={{
              fontSize: "clamp(16px, 2.5vw, 18px)",
              padding: 24,
            }}
          >
            📎 PDF: 7 ошибок при построении отдела маркетинга и продаж — отправим сразу
          </div>
        </div>

        {/* CTA button with pulse */}
        <div className="mb-2">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full font-console font-bold uppercase tracking-wider text-white nav-cta-pulse glow-blue cta-btn transition-all duration-200 hover:brightness-125"
            style={{
              maxWidth: 400,
              padding: "18px 32px",
              background: "#001FFF",
              fontSize: "clamp(16px, 2.5vw, 18px)",
            }}
          >
            ЗАБРАТЬ МАТЕРИАЛЫ
          </a>
        </div>
        <p className="font-console mb-12" style={{ fontSize: 14, color: "#666" }}>
          Бот отправит оба материала. Без спама.
        </p>

        {/* QR code section */}
        <div className="mb-12">
          <p
            className="font-console mb-4 text-white"
            style={{ fontSize: "clamp(16px, 2.5vw, 18px)" }}
          >
            Если вы с компьютера — отсканируйте
          </p>
          <div className="flex justify-center">
            <QRCodeSVG
              value={telegramLink}
              size={160}
              bgColor="transparent"
              fgColor="#FFFFFF"
              level="M"
            />
          </div>
        </div>

        {/* Back to home */}
        <Link
          href="/"
          className="inline-block font-console text-white/60 hover:text-white transition-colors underline underline-offset-4"
          style={{ fontSize: "clamp(16px, 2.5vw, 18px)" }}
        >
          Вернуться на главную
        </Link>
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
