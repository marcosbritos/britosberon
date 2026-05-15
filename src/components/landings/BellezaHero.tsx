"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function BellezaHero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(122,139,106,0.18),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(199,175,121,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-500/30 to-transparent" />
      </div>

      <div className="relative container-page py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-7"
        >
          <div className="h-px w-8 bg-sage-500/40" />
          <span className="font-serif italic text-[13px] text-sage-600 tracking-[0.08em]">
            Para profesionales de la belleza
          </span>
          <div className="h-px w-8 bg-sage-500/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] font-normal text-sage-900 tracking-tight mb-6 max-w-3xl mx-auto text-balance"
        >
          Tu talento merece{" "}
          <em className="text-sage-500 font-normal">crecer</em>
          <br className="hidden sm:block" />
          también en internet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[15px] sm:text-[16px] leading-relaxed text-sage-900/65 max-w-lg mx-auto mb-9"
        >
          Web con tu portfolio, turnos online 24/7, recordatorios automáticos
          por WhatsApp y presencia en Google Maps. Todo lo que tu negocio
          necesita, sin invertir una fortuna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-3 items-center justify-center mb-12"
        >
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.belleza)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage-900 text-cream-100 px-7 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-sage-900/90 transition-colors"
          >
            <MessageCircle size={18} fill="currentColor" />
            Pedir mi presencia digital
          </a>
          <a
            href="#features"
            className="border border-sage-900/20 text-sage-900 px-6 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-sage-900/5 transition-colors"
          >
            Ver demo <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-[240px] sm:w-[260px] h-[400px] sm:h-[440px] bg-ink border-[6px] border-sage-900/30 rounded-[28px] overflow-hidden relative shadow-2xl shadow-sage-900/10">
              <img src="/barberia.webp" alt="Barbería App" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
