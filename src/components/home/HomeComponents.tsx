import React from "react";
import Link from "next/link";
import { BBLogo } from "../Logo";
import { BB_C, BB_FONTS } from "@/lib/design";

export function HomeMarquee() {
  const items = [
    'ESTUDIO DIGITAL · WEBS · SISTEMAS · CRECIMIENTO',
    'BUENOS AIRES · ARGENTINA',
    'COMERCIO · DEPORTES · BELLEZA · TURISMO',
    'WEBS A MEDIDA · TIENDAS ONLINE · TURNOS · BOT WHATSAPP',
    'DISEÑO BOUTIQUE · SUSCRIPCIÓN MENSUAL ACCESIBLE',
    'EST. MMXXV',
  ];
  const Row = ({rev}: {rev?: boolean}) => (
    <div className={`bb-mq-track ${rev?'rev':''}`}>
      {Array.from({length:6}).flatMap((_,k) => items.map((t,i) => (
        <span key={`${k}-${i}`} className="inline-flex items-center gap-6 md:gap-[48px]">
          {t}
          <span className="font-serif italic text-acc text-[18px] md:text-[22px] leading-none -translate-y-0.5">&amp;</span>
        </span>
      )))}
    </div>
  );
  return (
    <div className="bg-ink text-bone overflow-hidden border-b border-ink/10 font-mono text-[10px] md:text-[12px] tracking-widest py-2 md:py-[10px] uppercase">
      <Row />
    </div>
  );
}

export function HomeNav() {
  return (
    <header className="flex items-center justify-between px-5 md:px-[56px] py-4 md:py-[22px] border-b border-ink/10 bg-bone relative z-10">
      <div className="flex items-center gap-3 md:gap-[18px] min-w-0">
        <Link href="/" className="shrink-0">
          <BBLogo variant="mark-ink" className="h-10 md:h-[52px] w-auto" />
        </Link>
        <div className="border-l border-ink/10 pl-3 md:pl-[18px] font-mono text-[8px] md:text-[10px] tracking-[0.18em] md:tracking-[0.22em] uppercase leading-[1.5] md:leading-[1.7] text-ink min-w-0">
          BRITOS BERÓN<br/>
          <span className="text-mute block truncate md:whitespace-normal">Estudio digital · Webs, sistemas y crecimiento</span>
        </div>
      </div>
      <nav className="hidden lg:flex gap-[36px] font-mono text-[11px] tracking-[0.18em] uppercase">
        <Link href="/comercios" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc mr-1.5">01</sup>Comercios</Link>
        <Link href="/deportes" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc mr-1.5">02</sup>Deportes</Link>
        <Link href="/belleza" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc mr-1.5">03</sup>Belleza</Link>
        <Link href="/turismo" className="no-underline text-inherit hover:opacity-70 transition-opacity"><sup className="text-acc mr-1.5">04</sup>Turismo</Link>
      </nav>
      <a href="https://wa.me/5491169299378" target="_blank" rel="noreferrer" className="hidden sm:inline-flex bg-ink text-bone px-4 md:px-[18px] py-2.5 md:py-[12px] font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase items-center gap-2.5 no-underline hover:opacity-90 transition-opacity shrink-0">
        <span className="w-2 h-2 bg-acc rounded-full shadow-[0_0_0_3px_rgba(255,87,34,0.2)]"/>
        WhatsApp
      </a>
    </header>
  );
}

export function HomeHero() {
  return (
    <section className="relative px-5 md:px-[56px] pt-10 md:pt-[80px] pb-14 md:pb-[100px] border-b border-ink/10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 md:gap-[64px] items-start">
        <div>
          <div className="flex items-center gap-3 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-mute mb-4 md:mb-[32px]">
            <span className="inline-block w-6 md:w-[36px] h-px bg-ink"/>
            <span>01 — Manifiesto</span>
            <span className="flex-1 h-px bg-ink/10 mx-3"/>
            <span>↓ scroll</span>
          </div>
          <h1 className="m-0 font-display font-semibold text-[54px] sm:text-[80px] md:text-[130px] leading-[0.9] tracking-[-0.045em]">
            Construimos<br/>
            negocios digitales.<br/>
            <span className="text-acc">Impulsamos<br/>
            su crecimiento.</span>
          </h1>
          <div className="mt-6 md:mt-[42px] flex flex-col sm:flex-row gap-4 md:gap-5 items-stretch sm:items-center">
            <a href="https://wa.me/5491169299378" target="_blank" rel="noreferrer" className="bg-acc text-bone px-6 md:px-[28px] py-4 md:py-[20px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 no-underline relative hover:opacity-90 transition-opacity text-center">
              Hablemos por WhatsApp
              <span className="font-serif italic text-[20px] md:text-[24px] leading-none -translate-y-0.5">→</span>
            </a>
            <a href="#caminos" className="px-6 md:px-[24px] py-4 md:py-[20px] font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase border border-ink text-ink no-underline text-center hover:bg-ink/5 transition-colors">
              Ver los 4 caminos ↓
            </a>
          </div>
        </div>

        {/* Right meta column */}
        <div className="pt-8 md:pt-[60px] border-t lg:border-t-0 lg:border-l border-ink/10 lg:pl-[30px]">
          <Meta k="01" l="Estudio fundado" v="Marzo 2025 · Bs. As." />
          <Meta k="02" l="Fundadores" v="Marcos Britos & Belén Berón" />
          <Meta k="03" l="Mensualidad" v="Sin inversión grande" />
          <Meta k="04" l="Entrega" v="7 a 14 días corridos" />
          <Meta k="05" l="Soporte" v="WhatsApp · ≤ 24 hs" />
          {/* Image placeholder */}
          <div className="mt-[30px] aspect-[1/1.2] bg-ink text-bone p-4 md:p-[18px] flex flex-col justify-between relative overflow-hidden hidden lg:flex">
            <svg viewBox="0 0 240 290" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <rect width="100%" height="100%" fill="var(--color-ink)"/>
              <rect width="100%" height="100%" fill="url(#bb-stripes)" className="text-bone opacity-[0.06]"/>
            </svg>
            <div className="relative font-mono text-[9px] tracking-[0.2em] uppercase opacity-70">
              IMG / 01<br/>retrato fundadores
            </div>
            <div className="relative font-serif italic text-[32px] leading-[1.05] text-bone">
              “Marcos<br/>&amp; Belén”
            </div>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-12 md:mt-[60px] pt-5 md:pt-[22px] border-t border-ink/10 flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-4 font-mono text-[10px] md:text-[11px] tracking-wider text-mute">
        <div>Webs, sistemas, ecommerce y plataformas. Pensados para crecer con tu negocio.</div>
        <div className="font-tabular-nums hidden md:block">pág. 01 / 09</div>
      </div>
    </section>
  );
}
function Meta({ k, l, v }: {k:string, l:string, v:string}) {
  return (
    <div className="grid grid-cols-[24px_1fr] gap-2.5 py-3 border-b border-ink/10">
      <span className="font-mono text-[10px] text-acc tracking-wider">{k}</span>
      <div>
        <div className="font-mono text-[9px] md:text-[10px] text-mute tracking-[0.18em] uppercase">{l}</div>
        <div className="font-display text-[13px] md:text-[14px] leading-[1.35] mt-0.5 text-ink">{v}</div>
      </div>
    </div>
  );
}

export function HomeIndex() {
  const items = [
    { n:'01', title:'Comercio', kicker:'Tu local del barrio, encontrable en internet', body:'Web a medida, tienda online, sistema de turnos y bot de WhatsApp. Misma operativa que las grandes plataformas, con el diseño boutique de tu marca.', tags:['WEB','TIENDA','TURNOS'], path: '/comercios' },
    { n:'02', title:'Deportes', kicker:'Tus equipos sienten que juegan una liga seria. Vos cargás partidos en minutos, no en horas, gracias a la base de datos', body:'Plataforma con base de datos de equipos y jugadores. Fixtures automáticos, tablas en vivo, carga de partidos intuitiva y app instalable para los participantes. Para predios, ligas y clubes amateur.', tags:['BASE DE DATOS','FIXTURES','APP'], path: '/deportes' },
    { n:'03', title:'Belleza',  kicker:'Tu salón, en Google y en el celular de tus clientas', body:'Portfolio digital, turnos 24/7, recordatorios automáticos. Para peluquerías, spa, manicura y barberías.', tags:['BOOK','24/7','SMS'], path: '/belleza' },
    { n:'04', title:'Turismo',  kicker:'Que el viajero te encuentre antes de elegir dónde dormir', body:'Web con galería, reservas online, Google Maps optimizado y reseñas automáticas. Para campings, hosterías, cabañas, posadas y refugios.', tags:['WEB','RESERVAS','MAPS'], path: '/turismo' },
  ];
  return (
    <section id="caminos" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] relative">
      <SectionHead nro="02" t="Índice" sub="Cuatro caminos. Una sola obsesión: que tu negocio venda más." />
      <div className="mt-12 md:mt-[60px] border-t-[1.5px] border-ink">
        {items.map((it,i) => (
          <Link href={it.path} key={it.n} className="no-underline text-inherit block group">
            <article className="grid grid-cols-1 lg:grid-cols-[80px_1.3fr_1.5fr_280px] gap-6 lg:gap-[32px] items-start lg:items-center py-10 md:py-[40px] border-b-[1.5px] border-ink relative">
              <div className="font-mono text-[11px] md:text-[13px] tracking-[0.15em] text-acc lg:self-start lg:pt-2">{it.n}</div>
              <div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-mute mb-2 md:mb-[10px]">{it.kicker}</div>
                <h3 className="m-0 font-display font-semibold text-[48px] md:text-[96px] leading-[0.95] tracking-tight group-hover:text-acc transition-colors">
                  {it.title}<span className="font-serif italic text-acc font-normal text-[48px] md:text-[96px]">.</span>
                </h3>
              </div>
              <p className="m-0 font-display text-[15px] md:text-[17px] leading-[1.45] text-ink max-w-[480px]">
                {it.body}
                <span className="block mt-3 md:mt-[14px] font-mono text-[9px] md:text-[11px] tracking-[0.18em] text-mute uppercase">
                  {it.tags.map((t,j) => <span key={t}>{t}{j<it.tags.length-1 && <span className="mx-2 text-acc">×</span>}</span>)}
                </span>
              </p>
              {/* Image card */}
              <div className={`aspect-square w-full lg:w-[280px] relative overflow-hidden ${i===0?'bg-ink':i===1?'bg-acc':i===2?'bg-bone2':'bg-acc2'}`}>
                <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full">
                  <rect width="280" height="280" fill={i===0?'var(--color-ink)':i===1?'var(--color-acc)':i===2?'var(--color-bone2)':'var(--color-acc2)'}/>
                  <g className={`${i===2?'text-ink':'text-bone'} ${i===1?'opacity-100':'opacity-15'}`}>
                    {i===1 ? (
                      <g fill="none" stroke="currentColor" strokeWidth="1.4" className="opacity-70">
                        <rect x="20" y="40" width="240" height="200" />
                        <line x1="140" y1="40" x2="140" y2="240" />
                        <circle cx="140" cy="140" r="32" />
                        <circle cx="140" cy="140" r="2" fill="currentColor"/>
                        <rect x="20" y="90" width="36" height="100" />
                        <rect x="224" y="90" width="36" height="100" />
                        <rect x="20" y="115" width="14" height="50" />
                        <rect x="246" y="115" width="14" height="50" />
                        <path d="M56,108 a 32,32 0 0 1 0,64" />
                        <path d="M224,108 a 32,32 0 0 0 0,64" />
                        <g className="opacity-55" stroke="currentColor" strokeWidth="1">
                          <path d="M178,16 h 22 v 8 M178,32 h 22 v -8 M200,20 h 18 v 8 M222,16 h 22 v 8 M222,32 h 22 v -8 M244,20 h 18 v 8" />
                        </g>
                      </g>
                    ) : i===3 ? (
                      <g fill="none" stroke="currentColor" strokeWidth="1.4" className="opacity-70">
                        {/* Montaña + carpa */}
                        <path d="M30 220 L100 90 L160 170 L210 110 L260 220 Z" />
                        <path d="M100 90 L120 130 L80 130 Z" fill="currentColor" opacity="0.5"/>
                        <path d="M210 110 L225 145 L195 145 Z" fill="currentColor" opacity="0.5"/>
                        {/* Pinos */}
                        <path d="M40 230 L52 200 L64 230 Z" />
                        <path d="M40 220 L52 195 L64 220 Z" />
                        <line x1="52" y1="195" x2="52" y2="240" />
                        {/* Carpa */}
                        <path d="M140 220 L165 180 L190 220 Z" />
                        <line x1="165" y1="180" x2="165" y2="220" />
                        {/* Sol/luna */}
                        <circle cx="220" cy="55" r="14" />
                        <g className="opacity-55">
                          <path d="M178 32 h 22 v 8 M178 48 h 22 v -8 M222 32 h 22 v 8" />
                        </g>
                      </g>
                    ) : (
                      <rect width="280" height="280" fill="url(#bb-dots)"/>
                    )}
                  </g>
                </svg>
                <div className={`absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] uppercase opacity-85 ${i===2?'text-ink':'text-bone'}`}>
                  {i===0?'IMG / 02 · COMERCIO':i===1?'IMG / 03 · TORNEOS DE FÚTBOL':i===2?'IMG / 04 · BELLEZA':'IMG / 05 · TURISMO'}
                </div>
                <div className={`absolute bottom-3 left-3 right-3 font-serif italic text-[24px] md:text-[30px] leading-none ${i===2?'text-ink':'text-bone'}`}>
                  {i===0?'kiosko':i===1?'torneos':i===2?'salón':'camping'}
                </div>
                <div className={`absolute top-3 right-3 font-mono text-[10px] opacity-80 ${i===2?'text-ink':'text-bone'}`}>
                  /{(i+1)*123}.jpg
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ nro, t, sub, dark }: {nro:string, t:string, sub?:string, dark?:boolean}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[40px]">
      <div>
        <div className={`font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] ${dark?'text-acc':'text-mute'}`}>
          {nro} — sección
        </div>
        <h2 className={`m-0 font-display font-semibold text-[64px] md:text-[120px] leading-[0.9] tracking-[-0.045em] ${dark?'text-bone':'text-ink'}`}>
          {t}<span className="font-serif italic text-acc font-normal">.</span>
        </h2>
      </div>
      {sub && (
        <p className={`max-w-[380px] m-0 font-display text-[16px] md:text-[18px] leading-[1.45] ${dark?'text-bone/80':'text-mute'}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function HomeProcess() {
  const steps = [
    { n:'01', t:'Charlemos', s:'30 minutos', body:'Sin compromiso. Entendemos tu negocio y qué tenés que resolver. Hablamos como personas, no como agencia.' },
    { n:'02', t:'Diseñamos', s:'48 — 72 horas', body:'Te mostramos el diseño rápido. Iteramos hasta que esté perfecto para vos. Sin templates genéricos, nunca.' },
    { n:'03', t:'Lanzamos', s:'7 — 14 días', body:'Online y funcionando. Después seguimos: actualizaciones, soporte y crecimiento mes a mes.' },
  ];
  return (
    <section id="proceso" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] bg-bone2 border-y-[1.5px] border-ink">
      <SectionHead nro="03" t="Proceso" sub="Sin barreras de entrada. Crecemos con vos. Sin letras chicas ni contratos abusivos." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-12 md:mt-[80px]">
        {steps.map((st,i) => (
          <div key={st.n} className={`py-10 lg:p-[36px_32px_36px] relative ${i>0 ? 'border-t lg:border-t-0 lg:border-l border-ink/20' : ''}`}>
            <div className="flex items-baseline justify-between">
              <div className="font-display font-bold text-[120px] lg:text-[240px] leading-[0.85] tracking-[-0.06em] text-ink">
                {st.n}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-acc [writing-mode:vertical-rl] rotate-180">
                {st.s}
              </div>
            </div>
            <h3 className="my-6 md:my-[24px_0_12px] font-serif italic font-normal text-[42px] md:text-[54px] leading-none text-acc">
              {st.t}
            </h3>
            <p className="m-0 font-display text-[15px] leading-[1.55] text-ink max-w-[340px]">
              {st.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeManifesto() {
  return (
    <section id="manifiesto" className="bg-ink text-bone px-5 md:px-[56px] py-20 md:py-[140px] relative overflow-hidden">
      <div className="bb-grain dark" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-5 text-bone">
        <rect width="100%" height="100%" fill="url(#bb-stripes)"/>
      </svg>
      <div className="relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-[48px]">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-acc">
          04 — Manifiesto
        </div>
        <div>
          <p className="m-0 font-display font-medium text-[42px] md:text-[84px] leading-[1.02] tracking-tight max-w-[1100px]">
            Hacemos webs <span className="font-serif italic text-acc font-normal">que venden</span>,
            no que adornan.
          </p>
          <p className="mt-8 md:mt-[48px] mb-0 font-display text-[18px] md:text-[22px] leading-[1.55] max-w-[760px] text-bone/80">
            Para nosotros el diseño no es decoración. Es la diferencia entre que tu cliente te encuentre
            o se vaya con tu competencia. Trabajamos para comercios reales, no para slides de inversores.
            Hablamos castellano. Respondemos rápido. <span className="text-acc">Y trabajamos como si tu negocio fuera el nuestro.</span>
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-12 md:mt-[80px] border-t border-bone/20">
            {[
              ['+24h','tiempo de respuesta'],
              ['7-14','días al aire'],
              ['1:1','trato directo'],
              ['∞','revisiones incluidas'],
            ].map(([n,l],i) => (
              <div key={i} className={`p-6 lg:p-[28px_18px_0] border-b lg:border-b-0 border-bone/20 ${i%2!==0?'border-l':''} ${i>1?'lg:border-l':'lg:border-l-0'} ${i===1?'lg:border-l':''}`}>
                <div className="font-display font-bold text-[48px] md:text-[84px] leading-[0.9] tracking-[-0.04em]">{n}</div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-bone/50 mt-2 md:mt-[10px]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeIncluye() {
  const rows = [
    ['01','Diseño a medida','Cada proyecto se diseña específicamente para tu marca. Nunca templates.'],
    ['02','Hosting y dominio','Todo incluido. No pagás servidores aparte ni configurás nada.'],
    ['03','SEO desde el día 1','Optimización técnica + Google Business Profile. Aparecés en tu zona.'],
    ['04','Actualizaciones mensuales','Cambios de textos, fotos, precios y servicios. Sin costo extra.'],
    ['05','Backup y seguridad','Copias periódicas. Protegido contra ataques y caídas.'],
    ['06','Soporte por WhatsApp','Te atendemos nosotros. ≤ 24 horas. No call center.'],
  ];
  return (
    <section className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px]">
      <SectionHead nro="05" t="Incluye" sub="Lo que entra en la mensualidad. Sin asteriscos chiquitos." />
      
      {/* Desktop table */}
      <table className="hidden lg:table mt-[60px] w-full border-collapse border-t-[1.5px] border-ink">
        <tbody>
          {rows.map(([n,t,d]) => (
            <tr key={n} className="border-b border-ink/20">
              <td className="py-[28px] pr-4 font-mono text-[13px] tracking-[0.15em] text-acc w-[80px] align-baseline">{n}</td>
              <td className="py-[28px] pr-[24px] font-display font-medium text-[36px] tracking-tight w-[40%] align-baseline">{t}</td>
              <td className="py-[28px] font-display text-[16px] leading-[1.5] text-ink align-baseline">{d}</td>
              <td className="py-[28px] w-[80px] text-right align-baseline">
                <span className="inline-flex w-8 h-8 border border-ink items-center justify-center text-acc font-serif italic text-[24px] leading-none -translate-y-0.5">✓</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile flex rows */}
      <div className="lg:hidden mt-12 border-t-[1.5px] border-ink flex flex-col">
        {rows.map(([n,t,d]) => (
          <div key={n} className="py-6 border-b border-ink/20 flex flex-col gap-3 relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-acc">{n}</span>
              <span className="inline-flex w-6 h-6 border border-ink items-center justify-center text-acc font-serif italic text-[18px] leading-none -translate-y-0.5">✓</span>
            </div>
            <h4 className="font-display font-medium text-[24px] m-0">{t}</h4>
            <p className="font-display text-[15px] text-ink/80 m-0">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeFaq() {
  const faqs = [
    ['¿Cuánto cuesta una página web?','Trabajamos con suscripción mensual, no pago grande de entrada. Cada proyecto se cotiza según lo que necesites.'],
    ['¿Puedo cancelar la suscripción cuando quiera?','Cada producto tiene un mínimo (3, 6 o 12 meses). Cumplido el plazo, cancelás con 30 días de aviso.'],
    ['¿En cuánto tiempo está lista?','Entre 7 y 14 días desde la firma y la entrega de materiales.'],
    ['¿El dominio queda a mi nombre?','Sí. Tu dominio queda a tu nombre/CUIT. Te lo llevás cuando quieras.'],
    ['¿Y si necesito cambios después?','Cambios normales incluidos. Funcionalidades nuevas se cotizan aparte.'],
    ['¿Trabajan en todo el país?','Sí, de forma remota. Presencial solo en GBA cuando hace falta.'],
  ];
  return (
    <section className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] bg-bone2 border-t-[1.5px] border-ink">
      <SectionHead nro="06" t="Dudas" sub="Las que nos hacen siempre. Respondidas sin vueltas." />
      <div className="mt-12 md:mt-[60px] columns-1 lg:columns-2 gap-[48px]">
        {faqs.map(([q,a],i) => (
          <div key={i} className="break-inside-avoid mb-8 md:mb-[34px] border-t border-ink pt-4 md:pt-[18px]">
            <div className="flex items-baseline gap-3 md:gap-[14px] mb-2 md:mb-[10px]">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-acc">Q.0{i+1}</span>
              <h4 className="m-0 font-display font-semibold text-[18px] md:text-[22px] tracking-[-0.015em] leading-[1.2]">{q}</h4>
            </div>
            <p className="m-0 ml-[36px] md:ml-[50px] font-display text-[14px] leading-[1.55] text-mute">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-ink mr-2">A.</span>
              {a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeCTA() {
  return (
    <section className="bg-acc text-bone px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] relative overflow-hidden">
      <div className="bb-grain dark" />
      {/* monumental logo as background */}
      <div className="absolute top-[-40px] right-[-120px] w-[780px] h-[780px] pointer-events-none opacity-95 mix-blend-multiply hidden md:block">
        <BBLogo variant="mark-ink" style={{height:780, width:'auto', filter:'opacity(.4)'}} />
      </div>
      <div className="relative max-w-[880px]">
        <div className="font-mono text-[10px] md:text-[12px] tracking-[0.22em] uppercase opacity-85 mb-4 md:mb-[24px]">
          07 — Empezá ahora
        </div>
        <h2 className="m-0 font-display font-semibold text-[64px] md:text-[140px] leading-[0.92] tracking-[-0.04em]">
          ¿Listo<br/>
          para <span className="font-serif italic text-ink font-normal">existir</span><br/>
          en internet?
        </h2>
        <p className="my-8 md:my-[42px_0_36px] font-display text-[18px] md:text-[22px] leading-[1.45] max-w-[520px]">
          30 minutos de charla. Sin compromiso. Te decimos si podemos ayudarte y, si no, te recomendamos a alguien que sí.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-stretch sm:items-center">
          <a href="https://wa.me/5491169299378" target="_blank" rel="noreferrer" className="bg-ink text-bone px-6 md:px-[32px] py-4 md:py-[24px] font-mono text-[11px] md:text-[13px] tracking-[0.22em] uppercase inline-flex items-center justify-center gap-3 no-underline hover:opacity-90 transition-opacity text-center">
            Escribinos por WhatsApp
            <span className="font-serif italic text-[24px] md:text-[28px] -translate-y-0.5">→</span>
          </a>
          <span className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-center sm:text-left mt-2 sm:mt-0">
            o · hola@britosberon.com.ar
          </span>
        </div>
      </div>
    </section>
  );
}

export function HomeFooter() {
  return (
    <footer className="bg-ink text-bone px-5 md:px-[56px] py-12 md:py-[56px] pb-8 md:pb-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-[32px] border-b border-bone/20 pb-10 lg:pb-[36px]">
        <div className="sm:col-span-2 lg:col-span-1">
          <BBLogo variant="mark-bone" className="h-12 md:h-[70px] w-auto" />
          <p className="max-w-[340px] font-display text-[14px] md:text-[15px] leading-[1.5] text-bone/60 mt-4 md:mt-[18px]">
            Estudio digital. Webs, sistemas y crecimiento para negocios en Argentina. Buenos Aires, AR.
          </p>
        </div>
        {[
          ['Servicios',['Desarrollo web','Sistema de turnos','Ecommerce','Automatización','Apps móviles']],
          ['Productos',['B&B Comercio','B&B Deportes','B&B Belleza','B&B Turismo','B&B Profesional ↗']],
          ['Estudio',['Quiénes somos','Cómo trabajamos','Contacto','Trabajá con nosotros']],
          ['Contacto',['WhatsApp','hola@britosberon.com.ar','@britosberon','Bs. As., AR']],
        ].map(([t,items]) => (
          <div key={t as string}>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-bone/40 mb-3 md:mb-[16px]">{t}</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5 md:gap-0">
              {(items as string[]).map(x => <li key={x} className="font-display text-[13px] md:leading-[1.9] text-bone">{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-[24px] flex flex-col md:flex-row justify-between gap-4 font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-bone/40 items-center md:items-start text-center md:text-left">
        <span>© {new Date().getFullYear()} Britos Berón · Todos los derechos reservados</span>
        <span className="flex gap-3 justify-center">
          <span>Términos</span><span>·</span><span>Privacidad</span><span>·</span><span>Cookies</span>
        </span>
        <span>v1.0 · Build {new Date().toISOString().split('T')[0].replace(/-/g, '.')}</span>
      </div>
    </footer>
  );
}
