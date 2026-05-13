"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "I",
    title: "Charlamos 30 min",
    description: "Entendemos tu negocio, tu marca y tu público",
  },
  {
    number: "II",
    title: "Diseñamos tu marca digital",
    description: "Web, portfolio, sistema de turnos, Google",
  },
  {
    number: "III",
    title: "Lanzamos y acompañamos",
    description: "Soporte continuo, sin que te preocupes de nada",
  },
];

export function BellezaProcess() {
  return (
    <section className="bg-cream-100 py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="font-serif italic text-[13px] text-sage-500 tracking-[0.08em] mb-3">
            — Cómo funciona —
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-normal text-sage-900 tracking-tight text-balance">
            Tres pasos. Tu negocio al siguiente nivel.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-white border border-sage-900/[0.08] rounded-2xl hover:shadow-lg hover:shadow-sage-500/5 transition-shadow"
            >
              <div className="font-serif text-[42px] text-sage-500 leading-none mb-4">
                {step.number}
              </div>
              <h3 className="text-[16px] font-semibold text-sage-900 mb-2">
                {step.title}
              </h3>
              <p className="text-[13px] text-sage-900/65 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
