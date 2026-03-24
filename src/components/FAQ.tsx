"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Чем вы отличаетесь от маркетингового агентства?",
    answer:
      "Агентство продаёт услуги — трафик, креатив, SMM. Мы строим систему. Разница — в ответственности за результат и в глубине вовлечения. Мы не просто запускаем рекламу — мы выстраиваем весь путь от первого касания до повторной покупки. Нанимаем людей, строим отдел продаж, настраиваем аналитику, управляем процессами. Агентство уходит — и всё разваливается. Мы строим так, чтобы работало без нас.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Бесплатный разбор — 15 минут, без обязательств. Стратегическая сессия — $500 (90 минут глубокой работы, на выходе — roadmap). Полное ведение — от $3,000/мес (стратегия, команда, каналы, отчётность). Начните с бесплатного разбора, чтобы понять, подходим ли мы друг другу.",
  },
  {
    question: "Как быстро будут результаты?",
    answer:
      "Первые изменения — в течение 2–4 недель. Системные результаты — через 60–90 дней. Маркетинг — это не спринт, а марафон. Но мы ускоряем старт максимально. За первые 30 дней вы увидите: настроенную аналитику, первые гипотезы в работе, понятную воронку и команду, которая знает, что делать.",
  },
  {
    question: "Вы работаете с любым бизнесом?",
    answer:
      "Нет. Мы работаем с компаниями, у которых уже есть продукт, клиенты и выручка. Если вы только начинаете — мы не лучший выбор. Наша сила — в масштабировании того, что уже работает. Идеальный клиент: оборот от $50K/мес, есть продукт и клиентская база, но маркетинг не систематизирован.",
  },
  {
    question: "Что если нам не подойдёт?",
    answer:
      "Именно для этого существует бесплатный 15-минутный разбор. За это время мы оба поймём, есть ли смысл работать вместе. Никаких обязательств. Если не подойдём — вы всё равно уйдёте с конкретными рекомендациями, которые сможете внедрить самостоятельно.",
  },
  {
    question: "В каких странах вы работаете?",
    answer:
      "Основной фокус — Узбекистан, Азербайджан и страны СНГ. Но опыт и методология позволяют работать с бизнесами в любой точке мира. Основатель лично работал в 30+ странах с бюджетами до $4M/мес.",
  },
  {
    question: "Нужно ли мне участвовать в процессе?",
    answer:
      "На старте — да, 2–3 часа в неделю на встречи и согласования. Мы должны глубоко понять ваш бизнес, продукт и клиентов. Через 60–90 дней система работает автономно. Ваше участие сводится к просмотру еженедельных отчётов и принятию стратегических решений.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scanIndex, setScanIndex] = useState<number | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setScanIndex(null);
    } else {
      setOpenIndex(index);
      if (!prefersReduced) {
        setScanIndex(index);
        // Remove scan line after animation completes
        setTimeout(() => setScanIndex(null), 300);
      }
    }
  };

  return (
    <section id="faq" className="py-20 md:py-24 px-6">
      <motion.h2
        className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-center mb-16 heading-glow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Частые вопросы
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="border-b border-white/10 py-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            viewport={{ once: true }}
          >
            <button
              className="w-full font-console font-bold text-left cursor-pointer flex justify-between items-center text-white faq-question"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className="ml-4 text-xl shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden relative"
                >
                  {scanIndex === index && <div className="faq-scan-line" />}
                  <p className="text-text-secondary mt-3 leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
