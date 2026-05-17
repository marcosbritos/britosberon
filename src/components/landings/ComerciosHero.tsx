"use client";

import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function ComerciosHero() {
  return (
    <section className="relative px-5 md:px-[56px] pt-10 md:pt-[80px] pb-14 md:pb-[100px] border-b border-ink/10 bg-bone">
      <div className="flex items-center gap-3 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-mute mb-6 md:mb-[32px]">
        <span className="inline-block w-6 md:w-[36px] h-px bg-ink" />
        <span>01 — Comercios</span>
        <span className="flex-1 h-px bg-ink/10 mx-3" />
        <span>↓ scroll</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 md:gap-[64px] items-start">
        <div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-mute mb-3 md:mb-[14px]">
            Para comercios y profesionales
          </div>
          {/* clamp() evita overflow en 320–414px; rango fluido hasta 130px en desktop */}
          <h1 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.045em] text-[clamp(44px,12vw,130px)]">
            Tu marca, <br />
            tu negocio <br />
            <span className="font-serif italic font-normal text-acc2 lg:text-acc">online.</span>
          </h1>

          <p className="mt-8 md:mt-[36px] mb-0 font-display text-[16px] md:text-[18px] leading-[1.55] text-ink max-w-[540px]">
            Misma operativa que las grandes plataformas, pero con un diseño hecho a medida
            de tu marca. Webs, tiendas online, turnos y bot de WhatsApp. Suscripción
            mensual accesible, sin inversión grande.
          </p>

          <div className="mt-8 md:mt-[42px] flex flex-col sm:flex-row gap-3 md:gap-5 items-stretch sm:items-center">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.comercios)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir presupuesto por WhatsApp"
              className="bg-ink text-bone px-6 md:px-[28px] py-4 md:py-[20px] min-h-[56px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:bg-acc2 active:translate-y-[1px] transition-all text-center"
            >
              Pedir presupuesto
              <span className="font-serif italic text-[20px] md:text-[24px] leading-none -translate-y-0.5" aria-hidden="true">→</span>
            </a>
            <a
              href="#features"
              className="px-6 md:px-[24px] py-4 md:py-[20px] min-h-[56px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase border border-ink text-ink no-underline text-center hover:bg-ink/5 transition-colors inline-flex items-center justify-center"
            >
              Ver qué incluye ↓
            </a>
          </div>
        </div>

        <div className="pt-8 md:pt-[60px] border-t lg:border-t-0 lg:border-l border-ink/10 lg:pl-[30px]">
          {[
            ['01', 'Entrega', '7 a 14 días corridos'],
            ['02', 'Modelo', 'Suscripción mensual'],
            ['03', 'Incluye', 'Web + Tienda + Turnos'],
            ['04', 'Soporte', 'WhatsApp · ≤ 24 hs'],
            ['05', 'Diseño', 'A medida, no plantilla'],
          ].map(([k, l, v]) => (
            <div key={k} className="grid grid-cols-[24px_1fr] gap-2.5 py-3 border-b border-ink/10">
              <span className="font-mono text-[10px] text-acc2 tracking-wider">{k}</span>
              <div>
                <div className="font-mono text-[9px] md:text-[10px] text-mute tracking-[0.18em] uppercase">{l}</div>
                <div className="font-display text-[13px] md:text-[14px] leading-[1.4] mt-0.5 text-ink">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-[60px] pt-5 md:pt-[22px] border-t border-ink/10 flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-3 font-mono text-[10px] md:text-[11px] tracking-wider text-mute">
        <div>Web a medida · Tienda online · Turnos · WhatsApp automático · Google Maps</div>
        <div className="font-tabular-nums hidden md:block">pág. 01 / 09</div>
      </div>
    </section>
  );
}
