"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BBLogo } from "../Logo";

/* ─────────────────────────────────────────────────────────────────────────────
   B&B HomeComponents — v1.1
   Cambios UX vs v1.0:
   • HomeNav   : sticky + backdrop-blur, tagline mobile envuelve, pill WhatsApp
                 visible en mobile, drawer con hamburguesa < 1024px.
   • HomeHero  : clamp() en H1 (sin overflow en 320–414px), CTAs min-h 56px,
                 primary ink/bone (AA), hover acc2.
   • HomeIndex : mini-mockups de la interface del producto en lugar de fotos
                 sueltas (catálogo, fixture/tabla, booking, reservas).
   • HomeCTA   : botón con min-h 56px, hover negro, ARIA label.
   • Section heads : clamp() en títulos grandes.
   • Texto acento sobre bone usa text-acc2 (#0E6B7C, AA) — mantiene text-acc en
     fondos oscuros donde el contraste pasa AA.
───────────────────────────────────────────────────────────────────────────── */

function SectionHead({ nro, t, sub }: { nro: string; t: string; sub: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-[40px] mb-6 md:mb-[80px]">
      <div>
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-2 md:mb-[14px] text-mute">
          {nro} — Sección
        </div>
        <h2 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.045em] text-[clamp(40px,9vw,100px)]">
          {t}<span className="font-serif italic text-acc2 font-normal">.</span>
        </h2>
      </div>
      <p className="max-w-[420px] m-0 font-display text-[15px] md:text-[18px] leading-[1.5] text-mute">
        {sub}
      </p>
    </div>
  );
}

export function HomeMarquee() {
  const items = [
    'ESTUDIO DIGITAL · WEBS · SISTEMAS · CRECIMIENTO',
    'COMERCIO · DEPORTES · BELLEZA · TURISMO',
    'WEBS A MEDIDA · TIENDAS ONLINE · TURNOS · BOT WHATSAPP',
    'ECOMMERCE · APPS · AUTOMATIZACIÓN',
    'DISEÑO BOUTIQUE',
  ];
  const Row = ({ rev }: { rev?: boolean }) => (
    <div className={`bb-mq-track ${rev ? 'rev' : ''}`}>
      {Array.from({ length: 6 }).flatMap((_, k) =>
        items.map((t, i) => (
          <span key={`${k}-${i}`} className="inline-flex items-center gap-6 md:gap-[48px]">
            {t}
            <span className="font-serif italic text-acc text-[18px] md:text-[22px] leading-none -translate-y-0.5">&amp;</span>
          </span>
        )),
      )}
    </div>
  );
  return (
    <div className="bg-ink text-bone overflow-hidden border-b border-ink/10 font-mono text-[10px] md:text-[12px] tracking-widest py-2 md:py-[10px] uppercase">
      <Row />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeNav — sticky + responsive + drawer
───────────────────────────────────────────────────────────────────────────── */
export function HomeNav() {
  const [open, setOpen] = useState(false);

  // Bloquea scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bone/90 supports-[backdrop-filter]:bg-bone/80 border-b border-ink/10">
        <div className="flex items-center justify-between gap-3 px-5 md:px-[56px] py-3.5 md:py-[18px]">
          <div className="flex items-center gap-3 md:gap-[18px] min-w-0 flex-1">
            <Link href="/" className="shrink-0" aria-label="Inicio B&B">
              <BBLogo variant="mark-ink" className="h-9 md:h-[48px] w-auto" />
            </Link>
            <div className="border-l border-ink/15 pl-3 md:pl-[18px] min-w-0">
              {/* Marca: una línea, peso fuerte */}
              <div className="font-mono text-[11px] font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase leading-[1.2] text-ink">
                Britos Berón
              </div>
              {/* Tagline: envuelve en mobile (max-width controla el wrap a 2 líneas naturalmente) */}
              <div className="font-mono text-[9.5px] md:text-[10px] tracking-[0.08em] md:tracking-[0.18em] uppercase leading-[1.35] md:leading-[1.5] text-mute mt-0.5 md:mt-1 max-w-[24ch] md:max-w-none whitespace-normal">
                Estudio digital · Webs, sistemas y crecimiento
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex gap-[36px] font-mono text-[11px] tracking-[0.18em] uppercase" aria-label="Principal">
            <Link href="/" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">01</sup>Inicio</Link>
            <Link href="/#que-hacemos" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">02</sup>Qué Hacemos</Link>
            <Link href="/#como-trabajamos" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">03</sup>Cómo Trabajamos</Link>
            <Link href="/#contacto" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">04</sup>Contacto</Link>
          </nav>

          {/* WA pill: solo desde sm (md? mantenemos en tablet+). En mobile va el drawer. */}
          <a
            href="https://wa.me/5491169299378"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden sm:inline-flex bg-ink text-bone px-3.5 md:px-[18px] py-2.5 md:py-[12px] min-h-[44px] font-mono text-[10.5px] md:text-[11px] tracking-[0.18em] uppercase items-center gap-2.5 no-underline hover:bg-ink-2 transition-colors shrink-0"
          >
            <span className="w-2 h-2 bg-acc rounded-full shadow-[0_0_0_3px_rgba(31,163,181,0.25)]" />
            <span>WhatsApp</span>
          </a>

          {/* Hamburguesa < 1024px */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-ink/20 text-ink hover:bg-ink/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-bone flex flex-col transition-transform duration-300 ease-out ${open ? 'translate-y-0' : '-translate-y-full'}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-ink/10">
          <BBLogo variant="mark-ink" className="h-9 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="inline-flex items-center justify-center w-11 h-11 border border-ink/20 text-ink hover:bg-ink/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <nav className="flex-1 flex flex-col px-5 pt-8" aria-label="Menú móvil">
          {[
            ['01', '/', 'Inicio'],
            ['02', '/#que-hacemos', 'Qué Hacemos'],
            ['03', '/#como-trabajamos', 'Cómo Trabajamos'],
            ['04', '/#contacto', 'Contacto'],
          ].map(([n, href, label]) => (
            <Link
              key={n}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 py-5 border-b border-ink/10 font-display font-semibold text-[36px] tracking-[-0.02em] text-ink no-underline"
            >
              <sup className="text-acc2 font-mono text-[12px] tracking-[0.15em] font-medium">{n}</sup>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-5 border-t border-ink/10">
          <a
            href="https://wa.me/5491169299378"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-ink text-bone min-h-[56px] px-6 py-4 font-mono text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:bg-acc2 transition-colors"
          >
            Hablemos por WhatsApp
            <span className="font-serif italic text-[22px] leading-none -translate-y-0.5">→</span>
          </a>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeHero — clamp() en H1, CTAs accesibles
───────────────────────────────────────────────────────────────────────────── */
export function HomeHero() {
  return (
    <section className="relative px-5 md:px-[56px] pt-10 md:pt-[80px] pb-8 md:pb-[100px] border-b border-ink/10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 md:gap-[64px] items-start">
        <div>
          <div className="flex items-center gap-3 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-mute mb-4 md:mb-[32px]">
            <span className="inline-block w-6 md:w-[36px] h-px bg-ink" />
            <span>01 — Inicio</span>
            <span className="flex-1 h-px bg-ink/10 mx-3" />
            <span>↓ scroll</span>
          </div>
          <h1 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.045em] text-[clamp(44px,11.5vw,130px)]">
            Construimos<br />
            negocios digitales.<br />
            <span className="text-acc">Impulsamos<br />
            su crecimiento.</span>
          </h1>
          <div className="mt-6 md:mt-[42px] flex items-stretch sm:items-center">
            <a
              href="https://wa.me/5491169299378"
              target="_blank"
              rel="noreferrer"
              aria-label="Hablemos por WhatsApp"
              className="bg-ink text-bone px-6 md:px-[32px] py-4 md:py-[22px] min-h-[56px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:bg-acc2 active:translate-y-[1px] transition-all text-center w-full sm:w-auto"
            >
              Hablemos por WhatsApp
              <span className="font-serif italic text-[20px] md:text-[24px] leading-none -translate-y-0.5" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="pt-5 md:pt-[60px] border-t lg:border-t-0 lg:border-l border-ink/10 lg:pl-[30px]">
          <ValueBlock label="Entrega rápida" value="7 a 14 días" />
          <ValueBlock label="Soporte directo" value="WhatsApp · ≤ 24 hs" />
          <ValueBlock label="Tecnología a medida" value="Diseño boutique" />
        </div>
      </div>
    </section>
  );
}
function ValueBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-5 border-b border-ink/10 last:border-b-0">
      <div className="font-mono text-[9px] md:text-[10px] text-mute tracking-[0.18em] uppercase">{label}</div>
      <div className="font-display text-[15px] md:text-[16px] font-medium leading-[1.3] mt-1 text-ink">{value}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeProcess
───────────────────────────────────────────────────────────────────────────── */
export function HomeProcess() {
  const steps = [
    { n: '01', t: 'Charlemos', s: '30 minutos', body: 'Sin compromiso. Entendemos tu negocio y qué tenés que resolver. Hablamos como personas, no como agencia.' },
    { n: '02', t: 'Diseñamos', s: '48 — 72 horas', body: 'Te mostramos el diseño rápido. Iteramos hasta que esté perfecto para vos. Sin templates genéricos, nunca.' },
    { n: '03', t: 'Lanzamos', s: '7 — 14 días', body: 'Online y funcionando. Después seguimos: actualizaciones, soporte y crecimiento mes a mes.' },
  ];
  return (
    <section id="como-trabajamos" className="px-5 md:px-[56px] py-12 md:py-[120px] pb-10 md:pb-[100px] bg-bone2 border-y-[1.5px] border-ink">
      <SectionHead nro="02" t="Proceso" sub="Un proceso ágil, transparente y diseñado para que no tengas que preocuparte por nada." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-4 md:mt-[80px]">
        {steps.map((st, i) => (
          <div key={st.n} className={`py-6 lg:p-[36px_32px_36px] relative ${i > 0 ? 'border-t lg:border-t-0 lg:border-l border-ink/20' : ''}`}>
            <div className="flex items-baseline justify-between">
              <div className="font-display font-bold leading-[0.85] tracking-[-0.06em] text-ink text-[clamp(96px,22vw,220px)]">{st.n}</div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-acc2 [writing-mode:vertical-rl] rotate-180">{st.s}</div>
            </div>
            <h3 className="my-6 md:my-[24px_0_12px] font-serif italic font-normal leading-none text-acc2 text-[clamp(36px,8vw,54px)]">
              {st.t}
            </h3>
            <p className="m-0 font-display text-[15px] leading-[1.6] text-ink max-w-[340px]">{st.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeSoluciones — 3 tarjetas con las áreas de servicio
───────────────────────────────────────────────────────────────────────────── */
export function HomeSoluciones() {
  const cards = [
    {
      n: '01',
      t: 'Plataformas de gestión y ligas',
      body: 'Nos especializamos en construir plataformas de alto impacto visual, con base de datos sólida para una gestión integral de torneos y ligas. Incorporamos fixtures y tablas automatizadas que optimizan todo el flujo de carga, para que volcar los datos de los partidos sea un proceso simple, rápido y libre de fricciones para el organizador.',
    },
    {
      n: '02',
      t: 'Webs profesionales a medida',
      body: 'Diseño boutique, carga ultra rápida y optimizada para Google. Cada sitio se construye desde cero respetando tu identidad de marca. WhatsApp integrado para no perder ni una consulta. Ideales para comercios, profesionales y complejos turísticos.',
    },
    {
      n: '03',
      t: 'Reservas online 24/7',
      body: 'Automatizá tus reservas y liberate de contestar mensajes a cualquier hora. Creamos plataformas integradas donde tus clientes puedan ver tus horarios disponibles y agendar su turno de forma autónoma las 24 horas.',
    },
  ];

  return (
    <section id="soluciones" className="px-5 md:px-[56px] py-12 md:py-[120px] pb-10 md:pb-[100px] bg-bone border-b border-ink/10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-[40px] mb-12 md:mb-[80px]">
        <div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] text-mute">
            03 — Sección
          </div>
          <h2 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.045em] text-[clamp(40px,9vw,100px)]">
            Soluciones<span className="font-serif italic text-acc2 font-normal">.</span>
          </h2>
        </div>
        <p className="max-w-[420px] m-0 font-display text-[15px] md:text-[18px] leading-[1.5] text-mute">
          Tres formas de impulsar tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[20px]">
        {cards.map(({ n, t, body }) => (
          <article
            key={n}
            className="bg-bone2 border border-ink/10 p-6 md:p-[28px] flex flex-col gap-4"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-acc2">{n}</span>
              <h3 className="m-0 font-display font-medium text-[22px] md:text-[24px] leading-[1.15] tracking-[-0.01em] text-ink">
                {t}
              </h3>
            </div>
            <p className="m-0 font-display text-[14px] md:text-[15px] leading-[1.6] text-ink/80">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeManifesto
───────────────────────────────────────────────────────────────────────────── */
export function HomeManifesto() {
  return (
    <section id="manifiesto" className="bg-ink text-bone px-5 md:px-[56px] py-14 md:py-[140px] relative overflow-hidden">
      <div className="bb-grain dark" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-5 text-bone">
        <rect width="100%" height="100%" fill="url(#bb-stripes)" />
      </svg>
      <div className="relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-[48px]">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-acc">04 — Manifiesto</div>
        <div>
          <p className="m-0 font-display font-medium leading-[1.04] tracking-tight max-w-[1100px] text-[clamp(40px,9vw,84px)]">
            Construimos <span className="font-serif italic text-acc font-normal">soluciones</span>,
            no solo páginas.
          </p>
          <p className="mt-8 md:mt-[48px] mb-0 font-display text-[17px] md:text-[22px] leading-[1.55] max-w-[760px] text-bone/85">
            Una interfaz estética es solo el principio. En B&amp;B nos enfocamos en que tu plataforma sea
            una herramienta real de gestión y crecimiento para tu día a día. Simplificamos tus procesos
            manuales, automatizamos tus reservas y profesionalizamos tu negocio bajo un modelo flexible
            y sin contratos que te aten. Hacemos fácil lo que parece difícil
            <span className="text-acc"> y trabajamos como si tu negocio fuera el nuestro.</span>
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-12 md:mt-[80px] border-t border-bone/20">
            {[
              ['+24h', 'tiempo de respuesta'],
              ['7-14', 'días al aire'],
              ['1:1', 'trato directo'],
              ['∞', 'revisiones incluidas'],
            ].map(([n, l], i) => (
              <div key={i} className={`p-6 lg:p-[28px_18px_0] border-b lg:border-b-0 border-bone/20 ${i % 2 !== 0 ? 'border-l' : ''} ${i > 1 ? 'lg:border-l' : ''} ${i === 1 ? 'lg:border-l' : ''}`}>
                <div className="font-display font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(40px,10vw,84px)]">{n}</div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-bone/55 mt-2 md:mt-[10px]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeIncluye
───────────────────────────────────────────────────────────────────────────── */
export function HomeIncluye() {
  const items = [
    {
      n: '01',
      t: 'Ecosistema integrado',
      body: 'Web, sistemas, automatizaciones y bases de datos trabajando como una sola plataforma. Sin parches ni herramientas dispersas.',
    },
    {
      n: '02',
      t: 'Soporte directo',
      body: 'WhatsApp con respuesta en menos de 24 horas. Trato directo con quienes construyen tu plataforma. No te dejamos solo.',
    },
    {
      n: '03',
      t: 'Evolución continua',
      body: 'Tu plataforma crece con vos. Sumamos funcionalidades, nuevas integraciones y mejoras a medida que tu negocio escala.',
    },
  ];

  return (
    <section id="que-hacemos" className="px-5 md:px-[56px] py-12 md:py-[120px] pb-10 md:pb-[100px]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-[40px] mb-10 md:mb-[60px]">
        <div>
          <div className="flex items-center gap-2.5 mb-3 md:mb-[14px]">
            <span className="inline-block w-7 h-px bg-ink" />
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute">05 — Sección</span>
          </div>
          <h2 className="m-0 font-display font-semibold leading-[0.95] tracking-[-0.035em] text-[clamp(36px,7.5vw,84px)] text-ink">
            Tu departamento de tecnología<span className="text-acc2">.</span>
          </h2>
          <p className="mt-3 md:mt-[10px] m-0 font-serif italic text-[clamp(18px,3vw,32px)] leading-[1.1] text-acc2">
            Sin los costos de tener uno.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-[40px] border-t-[1.5px] border-ink">
        {items.map(({ n, t, body }) => (
          <div
            key={n}
            className="grid grid-cols-[40px_1fr] md:grid-cols-[80px_240px_1fr] gap-x-4 md:gap-x-[40px] gap-y-2 py-7 md:py-[36px] border-b border-ink/20 items-baseline"
          >
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.2em] text-acc2 self-start md:self-baseline">
              {n}
            </span>
            <h3 className="m-0 font-display font-medium tracking-[-0.01em] text-[clamp(22px,3.5vw,32px)] leading-[1.15] text-ink col-start-2 md:col-start-2">
              {t}
            </h3>
            <p className="m-0 font-display text-[14.5px] md:text-[16px] leading-[1.6] text-ink col-start-2 md:col-start-3">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeQuienes — 06 · Quiénes Somos (Marcos & Belén)
───────────────────────────────────────────────────────────────────────────── */
export function HomeQuienes() {
  return (
    <section id="quienes-somos" className="px-5 md:px-[56px] py-12 md:py-[120px] pb-10 md:pb-[100px] bg-bone2 border-t-[1.5px] border-ink">
      <div className="flex items-center gap-2.5 mb-10 md:mb-[60px]">
        <span className="inline-block w-7 h-px bg-ink" />
        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute">06 — Quiénes somos</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 md:gap-[80px] items-start">
        {/* Avatares M & B */}
        <div className="flex items-center" aria-label="Marcos y Belén">
          <div
            className="relative w-[96px] h-[96px] md:w-[140px] md:h-[140px] rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(31,163,181,0.25)]"
            style={{ background: 'linear-gradient(135deg, #1FA3B5, #0E6B7C)' }}
          >
            <span className="font-serif font-semibold text-bone text-[44px] md:text-[64px] leading-none -tracking-[0.04em]" aria-hidden="true">M</span>
          </div>
          <div
            className="relative w-[96px] h-[96px] md:w-[140px] md:h-[140px] rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(201,169,97,0.25)] -ml-7 md:-ml-10 border-[4px] border-bone2"
            style={{ background: 'linear-gradient(135deg, #C9A961, #8a6f31)' }}
          >
            <span className="font-serif font-semibold text-ink text-[44px] md:text-[64px] leading-none -tracking-[0.04em]" aria-hidden="true">B</span>
          </div>
        </div>

        {/* Texto */}
        <div>
          <h2 className="m-0 font-display font-semibold leading-[0.96] tracking-[-0.035em] text-[clamp(36px,7vw,72px)] text-ink">
            Marcos &amp; Belén<span className="text-acc2">.</span>
          </h2>
          <p className="mt-2 md:mt-[10px] m-0 font-serif italic text-[clamp(18px,2.5vw,28px)] leading-[1.15] text-acc2">
            Un estudio. Dos personas.
          </p>

          <div className="mt-7 md:mt-[36px] flex flex-col gap-4 md:gap-5 max-w-[640px]">
            <p className="m-0 font-display text-[15.5px] md:text-[17px] leading-[1.65] text-ink">
              Nos especializamos en construir presencia digital para negocios que quieren crecer sin perder identidad.
            </p>
            <p className="m-0 font-display text-[15.5px] md:text-[17px] leading-[1.65] text-ink">
              Trabajamos juntos como pareja desde 2025, con la convicción de que la tecnología tiene que servir al negocio, no al revés.
            </p>
            <p className="m-0 font-display text-[15.5px] md:text-[17px] leading-[1.65] text-ink">
              Nos apasiona la tecnología cuando transforma lo cotidiano: cómo trabajás, cómo vendés, cuánto crece tu negocio.
            </p>
            <p className="m-0 font-display text-[15.5px] md:text-[17px] leading-[1.65] text-ink">
              No somos una agencia gigante con respuestas automáticas: somos un estudio boutique de Buenos Aires y trabajamos como <span className="font-serif italic text-acc2">tus socios tecnológicos</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Datos */}
      <div className="mt-12 md:mt-[80px] border-t-[1.5px] border-ink grid grid-cols-3 gap-4 pt-5 md:pt-[24px]">
        <div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-mute mb-1.5 md:mb-[8px]">Estudio</div>
          <div className="font-display font-medium text-[15px] md:text-[17px] text-ink">Boutique</div>
        </div>
        <div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-mute mb-1.5 md:mb-[8px]">Ubicación</div>
          <div className="font-display font-medium text-[15px] md:text-[17px] text-ink">Buenos Aires</div>
        </div>
        <div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-mute mb-1.5 md:mb-[8px]">Desde</div>
          <div className="font-display font-medium text-[15px] md:text-[17px] text-ink">2025</div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeCTA
───────────────────────────────────────────────────────────────────────────── */
export function HomeCTA() {
  return (
    <section id="contacto" className="bg-acc text-bone px-5 md:px-[56px] py-12 md:py-[120px] pb-10 md:pb-[100px] relative overflow-hidden">
      <div className="bb-grain dark" />
      <div className="relative max-w-[880px]">
        <div className="font-mono text-[10px] md:text-[12px] tracking-[0.22em] uppercase opacity-85 mb-4 md:mb-[24px]">07 — Conectemos</div>
        <h2 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.04em] text-[clamp(48px,11vw,120px)]">
          Tu futuro<br />
          <span className="font-serif italic text-ink font-normal">digital</span><br />
          empieza ahora.
        </h2>
        <p className="my-8 md:my-[42px_0_36px] font-display text-[17px] md:text-[22px] leading-[1.5] max-w-[620px]">
          Agendá una charla de 30 minutos sin compromiso. Analizamos tu estructura actual y te decimos exactamente cómo podemos optimizarla con tecnología.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[18px] items-stretch sm:items-center">
          <a
            href="https://wa.me/5491169299378"
            target="_blank"
            rel="noreferrer"
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

/* ─────────────────────────────────────────────────────────────────────────────
   HomeFooter — minimalista
───────────────────────────────────────────────────────────────────────────── */
export function HomeFooter() {
  return (
    <footer className="bg-ink text-bone px-5 md:px-[56px] py-8 md:py-[40px]">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-5 md:gap-4 text-center md:text-left">
        {/* Logo + dominio */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <BBLogo variant="mark-bone" className="h-9 md:h-[40px] w-auto" />
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-bone/55">
            britosberon.com.ar
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 justify-center">
          <a
            href="https://instagram.com/britosberon"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-bone/20 flex items-center justify-center hover:bg-bone/10 hover:border-bone/40 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-bone/80" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="mailto:hola@britosberon.com.ar"
            aria-label="Email hola@britosberon.com.ar"
            className="px-4 h-10 rounded-full border border-bone/20 inline-flex items-center justify-center gap-2 hover:bg-bone/10 hover:border-bone/40 transition-colors no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-bone/80" aria-hidden="true">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
            </svg>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-bone/80">hola@britosberon</span>
          </a>
        </div>
      </div>

      {/* Legal line */}
      <div className="mt-6 md:mt-[24px] pt-5 md:pt-[20px] border-t border-bone/15 flex flex-col md:flex-row justify-between gap-3 font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-bone/45 items-center md:items-start text-center md:text-left">
        <span>© {new Date().getFullYear()} Britos Berón</span>
        <span className="flex gap-3 justify-center">
          <span>Términos</span><span>·</span><span>Privacidad</span><span>·</span><span>Cookies</span>
        </span>
        <span className="font-tabular-nums">v1.1 · {new Date().toISOString().split('T')[0].replace(/-/g, '.')}</span>
      </div>
    </footer>
  );
}
