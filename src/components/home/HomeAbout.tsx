"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Te atendemos nosotros, no un call center",
  "Respondemos en menos de 24 horas",
  "Argentinos, en Buenos Aires",
  "Te entendemos: somos emprendedores",
];

export function HomeAbout() {
  return (
    <section className="bg-ink-900 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(168,85,247,0.06),transparent_70%)] pointer-events-none" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Avatares */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 relative h-[200px] flex items-center justify-center"
          >
            <div className="relative w-48 h-48">
              <div className="absolute left-0 top-4 w-28 h-28 bg-gradient-to-br from-accent-500 to-accent-purple rounded-full flex items-center justify-center shadow-2xl shadow-accent-500/30">
                <span className="font-serif text-[48px] font-bold text-white tracking-tighter">
                  M
                </span>
              </div>
              <div className="absolute right-0 bottom-4 w-28 h-28 bg-gradient-to-br from-gold to-red-500 rounded-full flex items-center justify-center border-4 border-ink-900 shadow-2xl shadow-gold/30">
                <span className="font-serif text-[48px] font-bold text-white tracking-tighter">
                  B
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-8"
          >
            <div className="inline-block bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full mb-4">
              <span className="text-[11px] tracking-[0.2em] text-accent-400 uppercase">
                Quiénes somos
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight mb-4 text-balance">
              Marcos & Belén.
              <br />
              <span className="text-accent-400">Una pareja, un estudio.</span>
            </h2>
            <p className="text-[15px] text-white/65 leading-relaxed mb-6 max-w-xl">
              Creemos que las herramientas digitales no deberían ser un lujo
              para empresas grandes. Por eso fundamos B&B: para llevarle
              tecnología profesional a los negocios de barrio, con suscripción
              mensual accesible y trato humano de verdad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((point) => (
                <div key={point} className="flex gap-2.5 items-start">
                  <Check
                    size={18}
                    className="text-green-400 mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[13px] text-white/80 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
