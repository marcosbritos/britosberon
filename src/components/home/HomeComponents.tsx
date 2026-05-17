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

export function HomeMarquee() {
  const items = [
    'ESTUDIO DIGITAL · WEBS · SISTEMAS · CRECIMIENTO',
    'BUENOS AIRES · ARGENTINA',
    'COMERCIO · DEPORTES · BELLEZA · TURISMO',
    'WEBS A MEDIDA · TIENDAS ONLINE · TURNOS · BOT WHATSAPP',
    'DISEÑO BOUTIQUE · SUSCRIPCIÓN MENSUAL ACCESIBLE',
    'EST. MMXXV',
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
            <Link href="/comercios" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">01</sup>Comercios</Link>
            <Link href="/deportes" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">02</sup>Deportes</Link>
            <Link href="/belleza" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">03</sup>Belleza</Link>
            <Link href="/turismo" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc2 mr-1.5">04</sup>Turismo</Link>
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
            ['01', '/comercios', 'Comercios'],
            ['02', '/deportes', 'Deportes'],
            ['03', '/belleza', 'Belleza'],
            ['04', '/turismo', 'Turismo'],
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
          <div className="mt-6 md:mt-[42px] flex flex-col sm:flex-row gap-3 md:gap-5 items-stretch sm:items-center">
            <a
              href="https://wa.me/5491169299378"
              target="_blank"
              rel="noreferrer"
              aria-label="Hablemos por WhatsApp"
              className="bg-ink text-bone px-6 md:px-[28px] py-4 md:py-[20px] min-h-[56px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:bg-acc2 active:translate-y-[1px] transition-all text-center"
            >
              Hablemos por WhatsApp
              <span className="font-serif italic text-[20px] md:text-[24px] leading-none -translate-y-0.5" aria-hidden="true">→</span>
            </a>
            <a
              href="#caminos"
              className="px-6 md:px-[24px] py-4 md:py-[20px] min-h-[56px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase border border-ink text-ink no-underline text-center hover:bg-ink/5 transition-colors inline-flex items-center justify-center"
            >
              Ver los 4 caminos ↓
            </a>
          </div>
        </div>

        <div className="pt-8 md:pt-[60px] border-t lg:border-t-0 lg:border-l border-ink/10 lg:pl-[30px]">
          <Meta k="01" l="Estudio fundado" v="Marzo 2025 · Bs. As." />
          <Meta k="02" l="Fundadores" v="Marcos Britos & Belén Berón" />
          <Meta k="03" l="Mensualidad" v="Sin inversión grande" />
          <Meta k="04" l="Entrega" v="7 a 14 días corridos" />
          <Meta k="05" l="Soporte" v="WhatsApp · ≤ 24 hs" />
          <div className="mt-[30px] aspect-[1/1.2] bg-ink text-bone p-4 md:p-[18px] flex-col justify-between relative overflow-hidden hidden lg:flex">
            <svg viewBox="0 0 240 290" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <rect width="100%" height="100%" fill="var(--color-ink, #0A1F2A)" />
              <rect width="100%" height="100%" fill="url(#bb-stripes)" className="text-bone opacity-[0.06]" />
            </svg>
            <div className="relative font-mono text-[9px] tracking-[0.2em] uppercase opacity-70">
              IMG / 01<br />retrato fundadores
            </div>
            <div className="relative font-serif italic text-[32px] leading-[1.05] text-bone">
              “Marcos<br />&amp; Belén”
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-[60px] pt-5 md:pt-[22px] border-t border-ink/10 flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-3 font-mono text-[10px] md:text-[11px] tracking-wider text-mute">
        <div>Webs, sistemas, ecommerce y plataformas. Pensados para crecer con tu negocio.</div>
        <div className="font-tabular-nums hidden md:block">pág. 01 / 09</div>
      </div>
    </section>
  );
}
function Meta({ k, l, v }: { k: string; l: string; v: string }) {
  return (
    <div className="grid grid-cols-[24px_1fr] gap-2.5 py-3 border-b border-ink/10">
      <span className="font-mono text-[10px] text-acc2 tracking-wider">{k}</span>
      <div>
        <div className="font-mono text-[9px] md:text-[10px] text-mute tracking-[0.18em] uppercase">{l}</div>
        <div className="font-display text-[13px] md:text-[14px] leading-[1.4] mt-0.5 text-ink">{v}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HomeIndex — 4 caminos con mini-mockups de la interface real de cada producto
───────────────────────────────────────────────────────────────────────────── */
export function HomeIndex() {
  const items = [
    {
      n: '01',
      title: 'Comercio',
      kicker: 'Tu local del barrio, encontrable en internet',
      body: 'Web a medida, tienda online, sistema de turnos y bot de WhatsApp. Misma operativa que las grandes plataformas, con el diseño boutique de tu marca.',
      tags: ['WEB', 'TIENDA', 'TURNOS'],
      path: '/comercios',
    },
    {
      n: '02',
      title: 'Deportes',
      kicker: 'Tus equipos sienten que juegan una liga seria',
      body: 'Plataforma con base de datos de equipos y jugadores. Fixtures automáticos, tablas en vivo, carga rápida y app instalable. Para predios, ligas y clubes amateur.',
      tags: ['BASE DE DATOS', 'FIXTURES', 'APP'],
      path: '/deportes',
    },
    {
      n: '03',
      title: 'Belleza',
      kicker: 'Tu salón, en Google y en el celular de tus clientas',
      body: 'Portfolio digital, turnos 24/7, recordatorios automáticos. Para peluquerías, spa, manicura y barberías.',
      tags: ['BOOK', '24/7', 'SMS'],
      path: '/belleza',
    },
    {
      n: '04',
      title: 'Turismo',
      kicker: 'Que el viajero te encuentre antes de elegir dónde dormir',
      body: 'Web con galería, reservas online, Google Maps optimizado y reseñas automáticas. Para campings, hosterías, cabañas, posadas y refugios.',
      tags: ['WEB', 'RESERVAS', 'MAPS'],
      path: '/turismo',
    },
  ];

  return (
    <section id="caminos" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] relative">
      <SectionHead nro="02" t="Índice" sub="Cuatro caminos. Una sola obsesión: que tu negocio venda más." />
      <div className="mt-12 md:mt-[60px] border-t-[1.5px] border-ink">
        {items.map((it, i) => (
          <Link href={it.path} key={it.n} className="no-underline text-inherit block group">
            <article className="grid grid-cols-1 lg:grid-cols-[64px_1.3fr_1.4fr_280px] gap-6 lg:gap-[32px] items-start lg:items-center py-10 md:py-[40px] border-b-[1.5px] border-ink relative">
              <div className="font-mono text-[11px] md:text-[13px] tracking-[0.15em] text-acc2 lg:self-start lg:pt-2">{it.n}</div>
              <div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-mute mb-2 md:mb-[10px]">{it.kicker}</div>
                <h3 className="m-0 font-display font-semibold leading-[0.95] tracking-tight text-[clamp(44px,10vw,96px)] group-hover:text-acc2 transition-colors">
                  {it.title}<span className="font-serif italic text-acc2 font-normal">.</span>
                </h3>
              </div>
              <p className="m-0 font-display text-[16px] md:text-[17px] leading-[1.5] text-ink max-w-[480px]">
                {it.body}
                <span className="block mt-3 md:mt-[14px] font-mono text-[9px] md:text-[11px] tracking-[0.18em] text-mute uppercase">
                  {it.tags.map((t, j) => (
                    <span key={t}>{t}{j < it.tags.length - 1 && <span className="mx-2 text-acc2">×</span>}</span>
                  ))}
                </span>
              </p>
              {/* UI mockup del producto */}
              <ProductMockup variant={it.title.toLowerCase() as 'comercio' | 'deportes' | 'belleza' | 'turismo'} />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* Mini-mockups por vertical, todo en Tailwind, sin assets externos */
function ProductMockup({ variant }: { variant: 'comercio' | 'deportes' | 'belleza' | 'turismo' }) {
  const chromeUrl = {
    comercio: 'tutienda.com.ar',
    deportes: 'liga.britosberon.com',
    belleza: 'turnos.barberia.com.ar',
    turismo: 'campingdellago.com.ar',
  }[variant];

  return (
    <div className="relative w-full aspect-[4/3] lg:w-[280px] lg:aspect-[4/5] overflow-hidden border border-ink/10">
      <div className={`absolute inset-0 flex flex-col ${variant === 'deportes' ? 'bg-[#0F2934]' : variant === 'belleza' ? 'bg-[#FAF8F2]' : 'bg-white'}`}>
        {/* Chrome */}
        <div className={`flex items-center gap-2 px-2.5 py-2 flex-shrink-0 ${variant === 'deportes' ? 'bg-ink border-b border-bone/10' : 'bg-[#EFECE4] border-b border-ink/10'}`}>
          <span className="inline-flex gap-1">
            <i className={`w-1.5 h-1.5 rounded-full ${variant === 'deportes' ? 'bg-bone/30' : 'bg-ink/25'}`} />
            <i className={`w-1.5 h-1.5 rounded-full ${variant === 'deportes' ? 'bg-bone/30' : 'bg-ink/25'}`} />
            <i className={`w-1.5 h-1.5 rounded-full ${variant === 'deportes' ? 'bg-bone/30' : 'bg-ink/25'}`} />
          </span>
          <span className={`flex-1 truncate font-mono text-[8.5px] tracking-wide rounded-md px-2 py-0.5 ${variant === 'deportes' ? 'bg-ink-2 text-bone/60' : 'bg-white text-mute'}`}>
            {chromeUrl}
          </span>
        </div>
        {/* Body */}
        <div className="flex-1 p-2.5 flex flex-col gap-2 overflow-hidden">
          {variant === 'comercio' && <MockComercio />}
          {variant === 'deportes' && <MockDeportes />}
          {variant === 'belleza' && <MockBelleza />}
          {variant === 'turismo' && <MockTurismo />}
        </div>
      </div>
      <span className="absolute bottom-2 right-2.5 font-mono text-[9px] tracking-[0.12em] opacity-70 z-10" style={{ color: variant === 'deportes' ? 'rgba(242,239,230,.6)' : 'rgba(82,79,71,.7)' }}>
        UI · {variant}
      </span>
    </div>
  );
}

function MockComercio() {
  const products = [
    { name: 'Café arábica 250g', price: '$ 4.200', bg: 'linear-gradient(135deg,#E8E4D8,#D6D0BE)' },
    { name: 'Alfajores artesanales', price: '$ 2.800', bg: 'linear-gradient(135deg,#F2D4B5,#D9A876)' },
    { name: 'Yerba serrana', price: '$ 3.500', bg: 'linear-gradient(135deg,#C7CDB8,#9AA37E)' },
    { name: 'Mermelada', price: '$ 2.200', bg: 'linear-gradient(135deg,#E0B5A8,#B57568)' },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="m-0 font-display font-semibold text-[12px] text-ink">Catálogo</h6>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-acc/15 text-acc2 font-mono text-[7px] tracking-[0.1em] uppercase">12 nuevos</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
        {products.map((p) => (
          <div key={p.name} className="bg-[#F6F3EB] rounded-md p-1.5 flex flex-col gap-1 overflow-hidden">
            <div className="aspect-[1.4/1] rounded-sm relative overflow-hidden" style={{ background: p.bg }}>
              <span className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 40%, rgba(255,255,255,.45), transparent 50%)' }} />
            </div>
            <div className="font-display text-[8.5px] font-semibold leading-tight text-ink">{p.name}</div>
            <div className="font-mono text-[8px] font-semibold text-acc2">{p.price}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-ink text-bone rounded-md px-2.5 py-1.5 font-mono text-[8px] tracking-[0.12em] uppercase">
        <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-acc shadow-[0_0_0_2px_rgba(31,163,181,0.3)]" />3 en el carrito</span>
        <span>$ 9.700 →</span>
      </div>
    </>
  );
}

function MockDeportes() {
  const rows = [
    { rank: 1, name: 'Defensores', pj: 7, pts: 17 },
    { rank: 2, name: 'Atlético del Pueblo', pj: 7, pts: 15 },
    { rank: 3, name: 'River Sur', pj: 7, pts: 13 },
    { rank: 4, name: 'Náutico FC', pj: 7, pts: 11 },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="m-0 font-display font-semibold text-[11px] text-bone">Fecha 7 · Zona A</h6>
        <span className="inline-flex items-center gap-1 font-mono text-[7px] tracking-[0.15em] uppercase text-acc">
          <span className="w-1 h-1 rounded-full bg-[#FF4747] shadow-[0_0_0_2px_rgba(255,71,71,0.3)]" />
          EN VIVO
        </span>
      </div>
      <div className="flex items-center justify-between bg-bone/5 border border-bone/10 rounded-md px-2.5 py-1.5 gap-2">
        <span className="flex items-center gap-1.5 flex-1 min-w-0 font-display text-[9px] font-semibold text-bone">
          <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono text-[6px] text-bone shrink-0" style={{ background: 'linear-gradient(135deg,#1FA3B5,#0E6B7C)' }}>DR</span>
          Defensores
        </span>
        <span className="font-display font-bold text-[11px] text-acc tracking-tight whitespace-nowrap">2 — 1</span>
        <span className="flex items-center justify-end gap-1.5 flex-1 min-w-0 font-display text-[9px] font-semibold text-bone">
          River Sur
          <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono text-[6px] text-bone shrink-0" style={{ background: 'linear-gradient(135deg,#C9A961,#8E7137)' }}>RS</span>
        </span>
      </div>
      <div className="bg-bone/5 rounded-md overflow-hidden flex-1 flex flex-col">
        <div className="grid grid-cols-[14px_1fr_18px_18px] gap-1.5 px-2 py-1 font-mono text-[7px] tracking-[0.12em] uppercase text-acc bg-bone/5">
          <span>#</span><span>EQUIPO</span><span>PJ</span><span>PTS</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[14px_1fr_18px_18px] gap-1.5 px-2 py-1 font-mono text-[7.5px] text-bone/80 items-center border-t border-bone/5">
            <span>{r.rank}</span>
            <span className="font-display text-[8.5px] text-bone truncate">{r.name}</span>
            <span>{r.pj}</span>
            <span className="text-acc font-semibold">{r.pts}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function MockBelleza() {
  const days = [
    { d: 'LUN', n: 14 }, { d: 'MAR', n: 15 }, { d: 'MIÉ', n: 16, sel: true },
    { d: 'JUE', n: 17 }, { d: 'VIE', n: 18 },
  ];
  const slots = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h6 className="m-0 font-display font-semibold text-[12px] text-ink">Reservá tu turno</h6>
          <p className="m-0 mt-0.5 font-mono text-[7.5px] tracking-[0.18em] uppercase text-mute">Corte + barba · 45min</p>
        </div>
        <span className="w-[22px] h-[22px] rounded-full" style={{ background: 'linear-gradient(135deg,#E8C9B5,#C99A82)' }} />
      </div>
      <div className="grid grid-cols-5 gap-1">
        {days.map((d) => (
          <div key={d.d} className={`text-center py-1 rounded-sm font-mono text-[7px] ${d.sel ? 'bg-ink text-bone border border-ink' : 'bg-white text-mute border border-ink/10'}`}>
            {d.d}
            <span className={`block font-display text-[11px] font-semibold tracking-tight mt-0.5 ${d.sel ? 'text-bone' : 'text-ink'}`}>{d.n}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {slots.map((s, i) => {
          const sel = i === 4;
          const dis = i === 1;
          return (
            <span
              key={s}
              className={`text-center py-1.5 font-mono text-[8px] rounded-sm border ${
                sel
                  ? 'bg-acc text-bone border-acc font-semibold'
                  : dis
                  ? 'bg-white text-ink/30 line-through border-ink/10'
                  : 'bg-white text-ink border-ink/10'
              }`}
            >
              {s}
            </span>
          );
        })}
      </div>
      <div className="mt-auto bg-ink text-bone text-center py-1.5 rounded-md font-mono text-[8px] tracking-[0.18em] uppercase">Confirmar turno →</div>
    </>
  );
}

function MockTurismo() {
  return (
    <>
      <div className="aspect-[16/8] rounded-md relative overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(180deg,#5A8BA8 0%,#3A6A87 35%,#2D5670 60%,#1E3D52 100%)' }}>
        <svg viewBox="0 0 280 140" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M0 95 L70 45 L120 70 L170 35 L230 75 L280 50 L280 140 L0 140 Z" fill="#2D5670" opacity=".8" />
          <path d="M0 110 L40 75 L90 95 L140 60 L200 95 L260 80 L280 90 L280 140 L0 140 Z" fill="#1E3D52" />
          <path d="M65 50 L70 45 L75 50 L72 55 Z" fill="#fff" opacity=".7" />
          <path d="M167 38 L170 35 L173 38 L171 42 Z" fill="#fff" opacity=".7" />
          <rect x="0" y="110" width="280" height="30" fill="#0A2A3E" opacity=".55" />
          <path d="M40 128 L120 128" stroke="#fff" strokeWidth=".5" opacity=".25" />
          <path d="M170 108 L186 90 L202 108 Z" fill="#C9A961" />
          <line x1="186" y1="90" x2="186" y2="108" stroke="#0A1F2A" strokeWidth=".8" />
          <circle cx="235" cy="30" r="7" fill="#fff" opacity=".85" />
        </svg>
        <span className="absolute top-1.5 left-1.5 font-mono text-[6.5px] tracking-[0.12em] uppercase text-white bg-black/35 px-1.5 py-0.5 rounded-full backdrop-blur-sm">📍 Bariloche</span>
        <span className="absolute bottom-1.5 right-1.5 inline-flex items-center gap-0.5 bg-white text-ink px-1.5 py-0.5 rounded-sm font-mono text-[7.5px] font-semibold">★ 4.9</span>
      </div>
      <h6 className="m-0 mt-0.5 font-display font-semibold text-[12px] text-ink">Camping del Lago</h6>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-[#F6F3EB] rounded-md px-2 py-1">
          <div className="font-mono text-[6.5px] tracking-[0.14em] uppercase text-mute">Check-in</div>
          <div className="font-display text-[9.5px] font-semibold text-ink mt-px">14 Mar</div>
        </div>
        <div className="bg-[#F6F3EB] rounded-md px-2 py-1">
          <div className="font-mono text-[6.5px] tracking-[0.14em] uppercase text-mute">Noches</div>
          <div className="font-display text-[9.5px] font-semibold text-ink mt-px">3</div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <span>
          <span className="font-display font-bold text-[14px] text-ink tracking-tight">$ 24.500</span>
          <span className="font-mono text-[7px] tracking-[0.12em] uppercase text-mute ml-1">/ noche</span>
        </span>
      </div>
      <div className="bg-acc2 text-white text-center py-1.5 rounded-sm font-mono text-[8px] tracking-[0.18em] uppercase">Reservar →</div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SectionHead — clamp() en título grande
───────────────────────────────────────────────────────────────────────────── */
function SectionHead({ nro, t, sub, dark }: { nro: string; t: string; sub?: string; dark?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[40px]">
      <div>
        <div className={`font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] ${dark ? 'text-acc' : 'text-mute'}`}>
          {nro} — sección
        </div>
        <h2 className={`m-0 font-display font-semibold leading-[0.9] tracking-[-0.045em] text-[clamp(56px,13vw,120px)] ${dark ? 'text-bone' : 'text-ink'}`}>
          {t}<span className={`font-serif italic font-normal ${dark ? 'text-acc' : 'text-acc2'}`}>.</span>
        </h2>
      </div>
      {sub && (
        <p className={`max-w-[380px] m-0 font-display text-[16px] md:text-[18px] leading-[1.45] ${dark ? 'text-bone/80' : 'text-mute'}`}>
          {sub}
        </p>
      )}
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
    <section id="proceso" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] bg-bone2 border-y-[1.5px] border-ink">
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
    <section className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px]">
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
    <section className="bg-acc text-bone px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] relative overflow-hidden">
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
