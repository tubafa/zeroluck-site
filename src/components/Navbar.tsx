"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "./QuizProvider";

const navLinks = [
  { label: "Проблема", href: "#problem" },
  { label: "Услуги", href: "#services" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Основатель", href: "#founder" },
  { label: "Кейсы", href: "#cases" },
  { label: "О компании", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ hideCTA = false }: { hideCTA?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openQuiz } = useQuiz();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex-shrink-0 logo-glow">
            <Image
              src="/logo_glow.svg"
              alt="ZeroLuck"
              width={120}
              height={42}
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-console text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={openQuiz}
            className="hidden md:inline-flex items-center px-5 py-2 font-console text-sm font-medium text-white rounded-sm nav-cta-pulse transition-all duration-200 hover:brightness-125"
            style={{ backgroundColor: "#001FFF", visibility: hideCTA ? "hidden" : "visible" }}
          >
            Записаться на разбор
          </button>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="font-console text-sm text-white/70 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              {!hideCTA && (
                <button
                  onClick={() => { closeMobile(); openQuiz(); }}
                  className="mt-2 inline-flex items-center justify-center px-5 py-2.5 font-console text-sm font-medium text-white rounded-sm transition-all duration-200 hover:brightness-125"
                  style={{ backgroundColor: "#001FFF" }}
                >
                  Записаться на разбор
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
