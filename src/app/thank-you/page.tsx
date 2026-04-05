"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";

export default function ThankYouPage() {
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
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        background: "#000",
        backgroundImage:
          "linear-gradient(rgba(0,31,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,31,255,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
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
          className="font-console font-bold text-white uppercase mb-4"
          style={{ fontSize: "clamp(26px, 4vw, 36px)", lineHeight: 1.2 }}
        >
          {"ОТЛИЧНО, МЫ ВАС ЖДЁМ!"}
        </h1>

        {/* Subtitle */}
        <p
          className="font-console mb-12"
          style={{ fontSize: 18, color: "#B0B0B0" }}
        >
          Разбор запланирован. Пока ждёте — подготовьтесь.
        </p>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div
            className="text-left font-console text-sm text-white/80"
            style={{
              border: "1px solid rgba(0,31,255,0.3)",
              padding: 24,
            }}
          >
            {"📋 Мини-аудит по вашим ответам — отправим до встречи"}
          </div>
          <div
            className="text-left font-console text-sm text-white/80"
            style={{
              border: "1px solid rgba(0,31,255,0.3)",
              padding: 24,
            }}
          >
            {"📎 PDF: 7 ошибок при построении отдела маркетинга и продаж — отправим сразу"}
          </div>
        </div>

        {/* CTA button */}
        <div className="mb-2">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full font-console text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
            style={{
              maxWidth: 400,
              padding: "16px 32px",
              background: "#001FFF",
            }}
          >
            ЗАБРАТЬ МАТЕРИАЛЫ
          </a>
        </div>
        <p className="font-console text-xs mb-12" style={{ color: "#666" }}>
          Бот отправит оба материала. Без спама.
        </p>

        {/* QR code section */}
        <div className="mb-12">
          <p
            className="font-console text-sm mb-4"
            style={{ color: "#B0B0B0" }}
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

        {/* Secondary links */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block font-console text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4"
          >
            Вернуться на главную
          </Link>
          <p className="font-console text-xs" style={{ color: "#444" }}>
            Напоминание придёт за 1 час до разбора
          </p>
        </div>
      </div>
    </div>
  );
}
