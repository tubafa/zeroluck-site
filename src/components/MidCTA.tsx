"use client";

import { motion } from "framer-motion";

export default function MidCTA() {
  return (
    <section className="py-16 md:py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold uppercase text-white mb-4 heading-glow">
          Хотите узнать, где именно вы теряете?
        </h2>
        <p className="text-text-secondary text-lg mb-10">
          15 минут. Бесплатно. Без обязательств.
        </p>
        <motion.a
          href="#cta"
          className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4"
          style={{
            boxShadow:
              "0 0 20px rgba(0,31,255,0.5), 0 0 40px rgba(0,31,255,0.2), 0 0 60px rgba(0,31,255,0.1)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 30px rgba(0,31,255,0.7), 0 0 60px rgba(0,31,255,0.3), 0 0 80px rgba(0,31,255,0.15)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Записаться на разбор
        </motion.a>
      </motion.div>
    </section>
  );
}
