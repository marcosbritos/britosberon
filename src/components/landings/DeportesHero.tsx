"use client";

import { motion } from "framer-motion";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function DeportesHero() {
  return (
    <section className="relative px-5 md:px-[56px] pt-16 md:pt-[80px] pb-20 md:pb-[100px] border-b border-ink/10 bg-bone">
      <div className="flex items-center gap-3 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-mute mb-6 md:mb-[32px]">
        <span className="inline-block w-6 md:w-[36px] h-px bg-ink" />
        <span>02 — Deportes</span>
        <span className="flex-1 h-px bg-ink/10 mx-3" />
        <span>↓ scroll</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 md:gap-[64px] items-start">
        <div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-mute mb-3 md:mb-[14px]">
            Para organizadores de torneos
          </div>
          <h1 className="m-0 font-display font-semibold text-[54px] sm:text-[80px] md:text-[130px] leading-[0.9] tracking-[-0.045em]">
            Convertí tu torneo de <br/>
            barrio en una <br/>
            <span className="font-serif italic font-normal text-acc">liga profesional.</span>
          </h1>

          <p className="mt-8 md:mt-[36px] mb-0 font-display text-[16px] md:text-[18px] leading-[1.5] text-ink max-w-[540px]">
            Organizá tu liga desde la base. Cargamos cada equipo y cada jugador en nuestra base de datos —
            sin formularios, sin errores, sin data entry manual.
            Los datos son verídicos desde el primer partido.
          </p>

          <div className="mt-8 md:mt-[42px] flex flex-col sm:flex-row gap-4 md:gap-5 items-stretch sm:items-center">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.deportes)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-acc text-bone px-6 md:px-[28px] py-4 md:py-[20px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:opacity-90 transition-opacity text-center"
            >
              Quiero una demo
              <span className="font-serif italic text-[20px] md:text-[24px] leading-none -translate-y-0.5">→</span>
            </a>
            <a
              href="#features"
              className="px-6 md:px-[24px] py-4 md:py-[20px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase border border-ink text-ink no-underline text-center hover:bg-ink/5 transition-colors"
            >
              Ver características ↓
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end pt-4 lg:pt-[60px]">
          <div className="bg-[#f8f8f8] p-3 sm:p-4 pb-10 sm:pb-12 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] border border-ink/10">
            <div className="w-full aspect-[9/16] overflow-hidden border border-ink/10 relative">
              <img src="/torneo-foto.png" alt="Torneo Interface" className="w-full h-full object-cover object-top" />
            </div>
            <div className="font-serif italic text-center text-ink text-sm sm:text-base mt-4 sm:mt-5 opacity-80">
              Tabla general
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-[60px] pt-5 md:pt-[22px] border-t border-ink/10 flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-4 font-mono text-[10px] md:text-[11px] tracking-wider text-mute">
        <div>Base de datos centralizada · Sin data entry · Datos con veracidad desde el día uno</div>
        <div className="font-tabular-nums hidden md:block">pág. 02 / 09</div>
      </div>
    </section>
  );
}
