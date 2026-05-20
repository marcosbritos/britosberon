"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { BBLogo } from "@/components/Logo";

interface LandingCTAProps {
  title: string;
  subtitle: string;
  whatsappMessage: string;
  accentColor?: "gold" | "lime" | "sage" | "violet" | "teal";
}

export function LandingCTA({ title, subtitle, whatsappMessage, accentColor }: LandingCTAProps) {
  const theme = {
    default: "bg-acc text-bone",
    gold: "bg-gold text-ink",
    lime: "bg-lime-600 text-bone",
    sage: "bg-emerald-700 text-bone",
    violet: "bg-violet-700 text-bone",
    teal: "bg-teal-700 text-bone",
  };
  const themeClass = theme[accentColor ?? "default"] || theme.default;

  return (
    <section className={`${themeClass} px-5 md:px-[56px] py-12 md:py-[120px] relative overflow-hidden`}>
      <div className="bb-grain dark" />
      <div className="absolute top-[-40px] right-[-120px] w-[600px] h-[600px] pointer-events-none hidden md:block opacity-90">
        <BBLogo variant="mark-ink" style={{ height: 600, width: "auto", filter: "opacity(.25)" }} />
      </div>
      <div className="relative max-w-[880px]">
        <div className="font-mono text-[10px] md:text-[12px] tracking-[0.22em] uppercase opacity-85 mb-4 md:mb-[24px]">
          — Empezá ahora
        </div>
        {/* clamp() para escalar fluido sin overflow en 320px */}
        <h2 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.04em] text-[clamp(48px,11vw,120px)]">
          {title}
        </h2>
        <p className="my-8 md:my-[42px] font-display text-[17px] md:text-[22px] leading-[1.45] max-w-[520px]">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-stretch sm:items-center">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribinos por WhatsApp"
            className="bg-ink text-bone px-6 md:px-[32px] py-4 md:py-[22px] min-h-[56px] font-mono text-[11px] md:text-[13px] tracking-[0.22em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:bg-black active:translate-y-[1px] transition-all text-center"
          >
            Escribinos por WhatsApp
            <span className="font-serif italic text-[24px] md:text-[28px] -translate-y-0.5" aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:hola@britosberon.com.ar"
            className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-center sm:text-left mt-2 sm:mt-0 underline-offset-4 hover:underline"
          >
            o · hola@britosberon.com.ar
          </a>
        </div>
      </div>
    </section>
  );
}
