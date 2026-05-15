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

      <div className="relative container-page py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 px-3 py-1.5 rounded-full mb-6"
            >
              <Trophy size={13} className="text-lime" />
              <span className="text-[11px] text-lime-light tracking-wide">
                Para predios y organizadores
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-bold text-bone tracking-tight mb-5 text-balance"
            >
              Tu predio o liga deportiva,{" "}
              <span className="bg-gradient-to-r from-lime to-lime-dark bg-clip-text text-transparent">
                profesional
              </span>{" "}
              en serio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-[15px] sm:text-[16px] leading-relaxed text-bone/60 mb-8"
            >
              Reservas de canchas, gestión de torneos, cobros online y app para tus jugadores. Todo en una plataforma diseñada para el deporte amateur argentino.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.deportes)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-bone px-6 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} fill="currentColor" />
                Quiero una demo
              </a>
              <a
                href="#features"
                className="border border-white/15 text-bone px-5 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                Ver características <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-[240px] h-[400px] bg-[#1a1f2e] border-[6px] border-[#2a2f3e] rounded-[28px] overflow-hidden relative shadow-2xl shadow-lime/10">
                <div className="bg-lime/10 px-3 py-3 border-b border-white/[0.06]">
                  <div className="text-[9px] text-lime tracking-[0.1em] uppercase">
                    📅 Reservas Hoy
                  </div>
                  <div className="text-[12px] text-bone font-semibold mt-0.5">
                    Cancha Principal
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  {[
                    { time: "19:00 - 20:00", team: "Los Tigres FC", filled: true },
                    { time: "20:00 - 21:00", team: "Amigos del Barrio", filled: true },
                    { time: "21:00 - 22:00", team: "Disponible", filled: false },
                    { time: "22:00 - 23:00", team: "FC Vecinos", filled: true },
                  ].map((slot, i) => (
                    <div
                      key={i}
                      className={`px-2 py-2 rounded ${
                        slot.filled
                          ? "bg-lime/10 border-l-2 border-lime"
                          : "bg-white/[0.04] border border-dashed border-white/15"
                      }`}
                    >
                      <div
                        className={`text-[10px] font-semibold ${
                          slot.filled ? "text-lime-light" : "text-bone/40"
                        }`}
                      >
                        {slot.time}
                      </div>
                      <div
                        className={`text-[10px] ${
                          slot.filled ? "text-bone" : "text-bone/55"
                        }`}
                      >
                        {slot.team}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-green-500/15 border border-green-500/30 px-2.5 py-2 rounded-lg flex items-center gap-1.5">
                  <DollarSign size={11} className="text-green-300" />
                  <div className="text-[10px] text-green-300 font-medium">
                    Pago confirmado
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
