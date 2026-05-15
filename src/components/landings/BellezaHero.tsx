"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, Calendar, Globe, Star } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function BellezaHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(122,139,106,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(199,175,121,0.08),transparent_60%)]" />
      </div>

      <div className="relative container-page py-16 sm:py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-7"
        >
          <div className="h-px w-8 bg-acc/40" />
          <span className="font-serif italic text-[13px] text-acc tracking-[0.08em]">
            Para profesionales de la belleza
          </span>
          <div className="h-px w-8 bg-acc/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.0] font-bold text-bone tracking-tight mb-6 max-w-3xl text-balance"
        >
          Tu talento merece{" "}
          <span className="font-serif italic font-normal text-acc">
            crecer
          </span>{" "}
          también en internet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[16px] sm:text-[17px] leading-relaxed text-bone/60 max-w-xl mb-10"
        >
          Web con tu portfolio, turnos online 24/7, recordatorios automáticos
          por WhatsApp y presencia en Google Maps. Todo lo que tu negocio
          necesita, sin invertir una fortuna.
        </motion.p>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-10"
        >
          {[
            { icon: Globe, label: "Web con tu portfolio", desc: "Mostrá tu trabajo en un sitio que transmite profesionalismo" },
            { icon: Calendar, label: "Turnos online 24/7", desc: "Los clientes reservan solos a cualquier hora, vos confirmás con un toque" },
            { icon: Star, label: "Presencia en Google", desc: "Te encontramos en Maps. Tu negocio aparece cuando te buscan" },
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 text-left">
              <div className="w-8 h-8 bg-acc/15 rounded-lg flex items-center justify-center mb-3">
                <item.icon size={16} className="text-acc" />
              </div>
              <div className="text-[13px] font-semibold text-bone mb-1">{item.label}</div>
              <div className="text-[12px] text-bone/50 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap gap-3 items-center justify-center mb-14"
        >
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.belleza)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-bone px-7 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="currentColor" />
            Pedir mi presencia digital
          </a>
          <a
            href="#features"
            className="border border-bone/20 text-bone/80 px-6 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-bone/5 transition-colors"
          >
            Ver demo <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center w-full"
        >
          <div className="relative">
            <div className="w-[240px] sm:w-[260px] h-[420px] sm:h-[460px] bg-ink border-[6px] border-acc/20 rounded-[32px] overflow-hidden relative shadow-2xl shadow-acc/10">
              <img src="/barberia.webp" alt="Barbería App" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
