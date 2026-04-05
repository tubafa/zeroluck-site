"use client";

import { motion } from "framer-motion";
import { useQuiz } from "./QuizProvider";

const steps = [
  {
    number: "01",
    title: "Диагностика",
    description:
      "Анализируем текущую ситуацию: каналы, воронки, команду, цифры. Находим, где вы теряете деньги и возможности.",
  },
  {
    number: "02",
    title: "Стратегия",
    description:
      "Строим дорожную карту: приоритеты, каналы, бюджеты, KPI. Документ, а не презентация.",
  },
  {
    number: "03",
    title: "Сборка",
    description:
      "Собираем систему: нанимаем людей, настраиваем процессы, запускаем каналы. Вы не участвуете в операционке.",
  },
  {
    number: "04",
    title: "Управление и рост",
    description:
      "Управляем системой, оптимизируем, масштабируем. Еженедельные отчёты, полная прозрачность.",
  },
];

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="process-step-card relative"
    >
      <div className="flex flex-col items-center shrink-0 relative z-10">
        <motion.span
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-bold text-accent font-console text-glow bg-black px-2 step-number"
        >
          {step.number}
        </motion.span>
      </div>

      <div className="pb-12 md:pb-28 process-step-spacing">
        <h3 className="font-console font-bold text-white uppercase mb-4 step-title flex items-center justify-center md:justify-start gap-3">
          {step.title}
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-accent status-dot shrink-0" />
        </h3>
        <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const { openQuiz } = useQuiz();
  return (
    <section id="process" className="py-20 md:py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-white text-center mb-20 heading-glow flex items-center justify-center gap-3"
      >
        Четыре шага. От хаоса к системе.
        <span className="blink-cursor text-accent">▌</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical connecting line */}
        <div
          className="hidden md:block absolute left-[2.5rem] top-0 bottom-0 w-[2px] process-line"
          style={{
            background: "linear-gradient(to bottom, #001FFF 0%, rgba(0, 31, 255, 0.5) 60%, rgba(0, 31, 255, 0.1) 100%)",
          }}
        />

        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16"
      >
        <motion.button
          onClick={openQuiz}
          className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 glow-blue cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Записаться на бесплатный разбор
        </motion.button>
      </motion.div>
    </section>
  );
}
