"use client";

import { motion } from "framer-motion";
import { useQuiz } from "./QuizProvider";

const statements = [
  "Пока вы думаете — конкуренты уже нанимают команды и строят воронки.",
  "Рекламные бюджеты растут каждый квартал. Через полгода тот же трафик будет стоить дороже.",
  "Лучшие специалисты на рынке разбираются быстро. Через месяц ваш идеальный маркетолог уже будет работать на конкурента.",
];

export default function Urgency() {
  const { openQuiz } = useQuiz();
  return (
    <section
      className="relative py-20 md:py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(40,0,0,0.15) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(40,0,0,0.15) 100%)",
      }}
    >
      {/* Red atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,30,30,0.06) 0%, transparent 70%), radial-gradient(ellipse 80% 40% at 50% 100%, rgba(255,30,30,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-center mb-16 heading-glow"
        >
          Каждый месяц без системы — это потерянные деньги
        </motion.h2>

        <div className="space-y-8 mb-16">
          {statements.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4"
            >
              <span
                className="shrink-0 w-2 h-2 rounded-full relative top-[-2px]"
                style={{
                  backgroundColor: "rgba(255,60,60,0.8)",
                  boxShadow: "0 0 8px rgba(255,60,60,0.5), 0 0 20px rgba(255,60,60,0.2)",
                }}
              />
              <p className="text-text-secondary text-lg leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white font-console font-bold text-lg md:text-xl mb-10">
            Запишитесь на разбор сегодня. Через 15 минут вы будете знать, с чего начать.
          </p>

          <motion.button
            onClick={openQuiz}
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 urgency-cta-pulse"
            style={{
              boxShadow:
                "0 0 20px rgba(0,31,255,0.6), 0 0 40px rgba(0,31,255,0.3), 0 0 60px rgba(0,31,255,0.15)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(0,31,255,0.8), 0 0 60px rgba(0,31,255,0.4), 0 0 80px rgba(0,31,255,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Записаться на разбор
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes urgencyPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0,31,255,0.6), 0 0 40px rgba(0,31,255,0.3), 0 0 60px rgba(0,31,255,0.15);
          }
          50% {
            box-shadow: 0 0 30px rgba(0,31,255,0.8), 0 0 50px rgba(0,31,255,0.5), 0 0 80px rgba(0,31,255,0.25), 0 0 100px rgba(0,31,255,0.1);
          }
        }
        .urgency-cta-pulse {
          animation: urgencyPulse 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
