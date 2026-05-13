"use client";

import { motion } from "framer-motion";
import { MessageCircle, Wrench, Rocket, Info } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Charlemos",
    description:
      "30 minutos sin compromiso. Entendemos tu negocio y qué necesitás resolver.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Diseñamos",
    description:
      "Te mostramos el diseño en 48-72hs. Iteramos hasta que esté perfecto para vos.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lanzamos y acompañamos",
    description:
      "En 7-14 días estás online. Después, soporte y actualizaciones todos los meses.",
  },
];

export function HomeProcess() {
  return (
    <section className="bg-ink-900 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full mb-4">
            <span className="text-[11px] tracking-[0.2em] text-accent-400 uppercase">
              Cómo trabajamos
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto text-balance">
            Suscripción mensual.{" "}
            <span className="text-accent-400">Sin contratos eternos.</span>
          </h2>
          <p className="text-[15px] text-white/60 max-w-lg mx-auto leading-relaxed">
            Te acompañamos siempre, no solo cuando lanzamos. Si no te sirve, lo cancelás.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl relative"
            >
              <span className="absolute top-4 right-4 font-serif text-[32px] text-accent-500/30 font-bold">
                {step.number}
              </span>
              <div className="w-10 h-10 bg-accent-500/15 rounded-xl flex items-center justify-center mb-4">
                <step.icon size={20} className="text-accent-400" />
              </div>
              <h3 className="text-[17px] font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="bg-gradient-to-r from-accent-500/10 to-accent-purple/10 border border-accent-500/20 rounded-2xl p-5 flex items-center gap-3"
        >
          <Info size={20} className="text-accent-400 shrink-0" />
          <p className="text-[14px] text-white">
            <span className="font-semibold">Sin inversión grande al inicio.</span>{" "}
            <span className="text-white/65">
              Pagás una mensualidad accesible y empezamos.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
