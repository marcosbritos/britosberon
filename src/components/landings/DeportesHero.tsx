"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Trophy, Check, DollarSign } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function DeportesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,255,63,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(168,85,247,0.06),transparent_70%)]" />
      </div>

      <div className="relative container-page py-16 sm:py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 px-3 py-1.5 rounded-full mb-6"
        >
          <Trophy size={13} className="text-lime" />
          <span className="text-[11px] text-lime-light tracking-wide uppercase">
            Para organizadores de torneos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] font-bold text-bone tracking-tight mb-5 max-w-3xl text-balance"
        >
          Tu torneo amateur de fútbol,{" "}
          <span className="bg-gradient-to-r from-lime to-lime-dark bg-clip-text text-transparent">
            profesional
          </span>{" "}
          en serio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[15px] sm:text-[16px] leading-relaxed text-bone/60 max-w-lg mb-8"
        >
          Gestión de equipos, fixture automático, tablas de posiciones, goleadores y fair play. Todo en una plataforma diseñada para digitalizar tu liga al 100%.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-3 items-center justify-center mb-12"
        >
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.deportes)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-bone px-7 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="currentColor" />
            Quiero una demo
          </a>
          <a
            href="#features"
            className="border border-white/15 text-bone px-6 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            Ver características <ArrowRight size={14} />
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
            <div className="w-[240px] sm:w-[260px] h-[400px] sm:h-[440px] bg-[#1a1f2e] border-[6px] border-[#2a2f3e] rounded-[28px] overflow-hidden relative shadow-2xl shadow-lime/10">
              <img src="/torneo.webp" alt="Torneo App" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
