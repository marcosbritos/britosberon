"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Trophy, Database, Zap } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function DeportesHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,255,63,0.07),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,255,63,0.04),transparent_70%)]" />
      </div>

      <div className="relative container-page py-16 sm:py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 px-3 py-1.5 rounded-full mb-6"
        >
          <Trophy size={13} className="text-lime" />
          <span className="text-[11px] text-lime tracking-[0.12em] uppercase font-medium">
            Para organizadores de torneos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.0] font-bold text-bone tracking-tight mb-6 max-w-3xl text-balance"
        >
          Gestión de torneos{" "}
          <span className="bg-gradient-to-r from-lime to-lime-dark bg-clip-text text-transparent">
            de fútbol
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[16px] sm:text-[17px] leading-relaxed text-bone/60 max-w-2xl mb-10"
        >
          Organizá tu liga desde la base. Cargamos a todos los jugadores de cada equipo en nuestra base de datos —
          sin formularios para los participantes, sin errores de tipeo, sin data entry manual.
          La información es veraz desde el primer partido.
        </motion.p>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-10"
        >
          {[
            { icon: Database, label: "Base de datos centralizada", desc: "Un solo lugar con todos los equipos, jugadores y estadísticas" },
            { icon: Zap, label: "Carga instantánea", desc: "Nosotros subimos todo. Los datos aparecen en la app al instante" },
            { icon: Trophy, label: "Datos con veracidad", desc: "Sin errores ni duplicados. Cada gol, tarjeta y partido queda registrado" },
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 text-left">
              <div className="w-8 h-8 bg-lime/15 rounded-lg flex items-center justify-center mb-3">
                <item.icon size={16} className="text-lime" />
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
            className="border border-bone/20 text-bone/80 px-6 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-bone/5 transition-colors"
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
            <div className="w-[240px] sm:w-[260px] h-[420px] sm:h-[460px] bg-[#1a1f2e] border-[6px] border-lime/20 rounded-[32px] overflow-hidden relative shadow-2xl shadow-lime/10">
              <img src="/torneo.webp" alt="Torneo App" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
