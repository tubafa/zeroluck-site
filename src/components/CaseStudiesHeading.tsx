"use client";

import { motion } from "framer-motion";

export default function CaseStudiesHeading() {
  return (
    <section className="pt-20 md:pt-24 pb-4 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-white mb-4 heading-glow flex items-center justify-center gap-3"
        >
          НАШИ РЕЗУЛЬТАТЫ
          <span className="blink-cursor text-accent">▌</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-text-secondary text-lg"
        >
          Реальные кейсы. Реальные цифры.
        </motion.p>
      </div>
    </section>
  );
}
