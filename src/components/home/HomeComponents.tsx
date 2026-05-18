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
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-[40px] mb-12 md:mb-[80px]">
      <div>
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] text-mute">
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
    <section className="relative px-5 md:px-[56px] pt-10 md:pt-[80px] pb-14 md:pb-[100px] border-b border-ink/10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 md:gap-[64px] items-start">
        <div>
          <div className="flex items-center gap-3 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-mute mb-4 md:mb-[32px]">
            <span className="inline-block w-6 md:w-[36px] h-px bg-ink" />
            <span>01 — Manifiesto</span>
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
              className="bg-acc text-bone px-6 md:px-[32px] py-4 md:py-[22px] min-h-[56px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:bg-acc2 active:translate-y-[1px] transition-all text-center w-full sm:w-auto"
            >
              Hablemos por WhatsApp
              <span className="font-serif italic text-[20px] md:text-[24px] leading-none -translate-y-0.5" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="pt-8 md:pt-[60px] border-t lg:border-t-0 lg:border-l border-ink/10 lg:pl-[30px]">
          <ValueBlock icon="⚡" label="Entrega rápida" value="7 a 14 días" />
          <ValueBlock icon="💬" label="Soporte directo" value="WhatsApp · ≤ 24 hs" />
          <ValueBlock icon="✦" label="Tecnología a medida" value="Diseño boutique" />
        </div>
      </div>
    </section>
  );
}
function ValueBlock({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 py-5 border-b border-ink/10 last:border-b-0">
      <span className="text-[24px] md:text-[28px] leading-none text-acc2 shrink-0 w-10 text-center" aria-hidden="true">{icon}</span>
      <div className="min-w-0">
        <div className="font-mono text-[9px] md:text-[10px] text-mute tracking-[0.18em] uppercase">{label}</div>
        <div className="font-display text-[15px] md:text-[16px] font-medium leading-[1.3] mt-0.5 text-ink">{value}</div>
      </div>
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
    <section id="como-trabajamos" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] bg-bone2 border-y-[1.5px] border-ink">
      <SectionHead nro="03" t="Proceso" sub="Sin barreras de entrada. Crecemos con vos. Sin letras chicas ni contratos abusivos." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-12 md:mt-[80px]">
        {steps.map((st, i) => (
          <div key={st.n} className={`py-10 lg:p-[36px_32px_36px] relative ${i > 0 ? 'border-t lg:border-t-0 lg:border-l border-ink/20' : ''}`}>
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
   HomeManifesto
───────────────────────────────────────────────────────────────────────────── */
export function HomeManifesto() {
  return (
    <section id="manifiesto" className="bg-ink text-bone px-5 md:px-[56px] py-20 md:py-[140px] relative overflow-hidden">
      <div className="bb-grain dark" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-5 text-bone">
        <rect width="100%" height="100%" fill="url(#bb-stripes)" />
      </svg>
      <div className="relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-[48px]">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-acc">04 — Manifiesto</div>
        <div>
          <p className="m-0 font-display font-medium leading-[1.04] tracking-tight max-w-[1100px] text-[clamp(40px,9vw,84px)]">
            Hacemos webs <span className="font-serif italic text-acc font-normal">que venden</span>,
            no que adornan.
          </p>
          <p className="mt-8 md:mt-[48px] mb-0 font-display text-[17px] md:text-[22px] leading-[1.55] max-w-[760px] text-bone/85">
            Para nosotros el diseño no es decoración. Es la diferencia entre que tu cliente te encuentre
            o se vaya con tu competencia. Trabajamos para comercios reales, no para slides de inversores.
            Hablamos castellano. Respondemos rápido. <span className="text-acc">Y trabajamos como si tu negocio fuera el nuestro.</span>
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
  const rows = [
    ['01', 'Diseño a medida', 'Cada proyecto se diseña específicamente para tu marca. Nunca templates.'],
    ['02', 'Hosting y dominio', 'Todo incluido. No pagás servidores aparte ni configurás nada.'],
    ['03', 'SEO desde el día 1', 'Optimización técnica + Google Business Profile. Aparecés en tu zona.'],
    ['04', 'Actualizaciones mensuales', 'Cambios de textos, fotos, precios y servicios. Sin costo extra.'],
    ['05', 'Backup y seguridad', 'Copias periódicas. Protegido contra ataques y caídas.'],
    ['06', 'Soporte por WhatsApp', 'Te atendemos nosotros. ≤ 24 horas. No call center.'],
  ];
  return (
    <section id="que-hacemos" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px]">
      <SectionHead nro="05" t="Incluye" sub="Lo que entra en la mensualidad. Sin asteriscos chiquitos." />

      {/* Desktop table */}
      <table className="hidden lg:table mt-[60px] w-full border-collapse border-t-[1.5px] border-ink">
        <tbody>
          {rows.map(([n, t, d]) => (
            <tr key={n} className="border-b border-ink/20">
              <td className="py-[28px] pr-4 font-mono text-[13px] tracking-[0.15em] text-acc2 w-[80px] align-baseline">{n}</td>
              <td className="py-[28px] pr-[24px] font-display font-medium text-[clamp(28px,3vw,36px)] tracking-tight w-[40%] align-baseline">{t}</td>
              <td className="py-[28px] font-display text-[16px] leading-[1.55] text-ink align-baseline">{d}</td>
              <td className="py-[28px] w-[80px] text-right align-baseline">
                <span className="inline-flex w-8 h-8 border border-ink items-center justify-center text-acc2 font-serif italic text-[24px] leading-none -translate-y-0.5">✓</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile */}
      <div className="lg:hidden mt-12 border-t-[1.5px] border-ink flex flex-col">
        {rows.map(([n, t, d]) => (
          <div key={n} className="py-6 border-b border-ink/20 flex flex-col gap-2.5 relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-acc2">{n}</span>
              <span className="inline-flex w-6 h-6 border border-ink items-center justify-center text-acc2 font-serif italic text-[18px] leading-none -translate-y-0.5">✓</span>
            </div>
            <h4 className="font-display font-medium text-[24px] m-0 leading-tight">{t}</h4>
            <p className="font-display text-[15px] leading-[1.55] text-ink/85 m-0">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeFaq
───────────────────────────────────────────────────────────────────────────── */
export function HomeFaq() {
  const faqs = [
    ['¿Cuánto cuesta una página web?', 'Trabajamos con suscripción mensual, no pago grande de entrada. Cada proyecto se cotiza según lo que necesites.'],
    ['¿Puedo cancelar la suscripción cuando quiera?', 'Cada producto tiene un mínimo (3, 6 o 12 meses). Cumplido el plazo, cancelás con 30 días de aviso.'],
    ['¿En cuánto tiempo está lista?', 'Entre 7 y 14 días desde la firma y la entrega de materiales.'],
    ['¿El dominio queda a mi nombre?', 'Sí. Tu dominio queda a tu nombre/CUIT. Te lo llevás cuando quieras.'],
    ['¿Y si necesito cambios después?', 'Cambios normales incluidos. Funcionalidades nuevas se cotizan aparte.'],
    ['¿Trabajan en todo el país?', 'Sí, de forma remota. Presencial solo en GBA cuando hace falta.'],
  ];
  return (
    <section className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] bg-bone2 border-t-[1.5px] border-ink">
      <SectionHead nro="06" t="Dudas" sub="Las que nos hacen siempre. Respondidas sin vueltas." />
      <div className="mt-12 md:mt-[60px] columns-1 lg:columns-2 gap-[48px]">
        {faqs.map(([q, a], i) => (
          <details key={i} className="break-inside-avoid mb-6 md:mb-[26px] border-t border-ink pt-4 md:pt-[18px] group">
            <summary className="cursor-pointer list-none flex items-baseline gap-3 md:gap-[14px] mb-2 md:mb-[10px]">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-acc2 shrink-0">Q.0{i + 1}</span>
              <h4 className="m-0 font-display font-semibold text-[18px] md:text-[22px] tracking-[-0.015em] leading-[1.25] flex-1">{q}</h4>
              <span className="font-mono text-[14px] text-mute group-open:rotate-45 transition-transform shrink-0" aria-hidden="true">+</span>
            </summary>
            <p className="m-0 ml-[36px] md:ml-[50px] font-display text-[14.5px] leading-[1.6] text-mute">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-ink mr-2">A.</span>
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeCTA
───────────────────────────────────────────────────────────────────────────── */
export function HomeCTA() {
  return (
    <section id="contacto" className="bg-acc text-bone px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] relative overflow-hidden">
      <div className="bb-grain dark" />
      <div className="absolute top-[-40px] right-[-120px] w-[780px] h-[780px] pointer-events-none opacity-95 mix-blend-multiply hidden md:block">
        <BBLogo variant="mark-ink" style={{ height: 780, width: 'auto', filter: 'opacity(.4)' }} />
      </div>
      <div className="relative max-w-[880px]">
        <div className="font-mono text-[10px] md:text-[12px] tracking-[0.22em] uppercase opacity-85 mb-4 md:mb-[24px]">07 — Empezá ahora</div>
        <h2 className="m-0 font-display font-semibold leading-[0.92] tracking-[-0.04em] text-[clamp(56px,14vw,140px)]">
          ¿Listo<br />
          para <span className="font-serif italic text-ink font-normal">existir</span><br />
          en internet?
        </h2>
        <p className="my-8 md:my-[42px_0_36px] font-display text-[17px] md:text-[22px] leading-[1.45] max-w-[520px]">
          30 minutos de charla. Sin compromiso. Te decimos si podemos ayudarte y, si no, te recomendamos a alguien que sí.
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
   HomeFooter
───────────────────────────────────────────────────────────────────────────── */
export function HomeFooter() {
  return (
    <footer className="bg-ink text-bone px-5 md:px-[56px] py-12 md:py-[56px] pb-8 md:pb-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-[32px] border-b border-bone/20 pb-10 lg:pb-[36px]">
        <div className="sm:col-span-2 lg:col-span-1">
          <BBLogo variant="mark-bone" className="h-12 md:h-[70px] w-auto" />
          <p className="max-w-[340px] font-display text-[14px] md:text-[15px] leading-[1.55] text-bone/65 mt-4 md:mt-[18px]">
            Estudio digital. Webs, sistemas y crecimiento para negocios en Argentina. Buenos Aires, AR.
          </p>
        </div>
        {[
          ['Servicios', ['Desarrollo web', 'Sistema de turnos', 'Ecommerce', 'Automatización', 'Apps móviles']],
          ['Productos', ['B&B Comercio', 'B&B Deportes', 'B&B Belleza', 'B&B Turismo', 'B&B Profesional ↗']],
          ['Estudio', ['Quiénes somos', 'Cómo trabajamos', 'Contacto', 'Trabajá con nosotros']],
          ['Contacto', ['WhatsApp', 'hola@britosberon.com.ar', '@britosberon', 'Bs. As., AR']],
        ].map(([t, items]) => (
          <div key={t as string}>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-bone/45 mb-3 md:mb-[16px]">{t}</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2 md:gap-1">
              {(items as string[]).map((x) => (
                <li key={x} className="font-display text-[13px] md:text-[14px] leading-[1.5] text-bone min-h-[32px] flex items-center">{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-[24px] flex flex-col md:flex-row justify-between gap-4 font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-bone/45 items-center md:items-start text-center md:text-left">
        <span>© {new Date().getFullYear()} Britos Berón · Todos los derechos reservados</span>
        <span className="flex gap-3 justify-center">
          <span>Términos</span><span>·</span><span>Privacidad</span><span>·</span><span>Cookies</span>
        </span>
        <span>v1.1 · UX optimizado</span>
      </div>
    </footer>
  );
}
