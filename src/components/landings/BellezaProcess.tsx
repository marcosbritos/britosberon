"use client";

import { motion } from "framer-motion";

export function BellezaProcess() {
  const steps = [
    { n:'01', t:'Charlamos', s:'30 minutos', body:'Entendemos tu negocio, tu marca y qué tipo de público querés atraer. Hablamos de tus objetivos reales.' },
    { n:'02', t:'Diseñamos', s:'48 — 72 horas', body:'Web, portfolio de trabajos, sistema de turnos y presencia en Google. Todo alineado con tu estética profesional.' },
    { n:'03', t:'Lanzamos', s:'7 — 14 días', body:'Online y funcionando. Empezás a recibir turnos solos mientras vos te enfocás en lo que mejor sabés hacer.' },
  ];

  return (
    <section id="proceso-belleza" className="px-5 md:px-[56px] py-20 md:py-[120px] pb-16 md:pb-[100px] bg-bone2 border-y-[1.5px] border-ink">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[40px] mb-12 md:mb-[80px]">
        <div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] text-mute">
            03 — proceso
          </div>
          <h2 className="m-0 font-display font-semibold text-[54px] md:text-[100px] leading-[0.9] tracking-[-0.045em] text-ink">
            Tres pasos<span className="font-serif italic text-acc font-normal">.</span>
          </h2>
        </div>
        <p className="max-w-[380px] m-0 font-display text-[16px] md:text-[18px] leading-[1.45] text-mute">
          Tu negocio al siguiente nivel, sin complicaciones técnicas para vos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-12 md:mt-[80px] border-t border-ink/10">
        {steps.map((st, i) => (
          <div key={st.n} className={`py-10 lg:p-[36px_32px_36px] relative ${i > 0 ? 'border-t lg:border-t-0 lg:border-l border-ink/20' : ''}`}>
            <div className="flex items-baseline justify-between">
              <div className="font-display font-bold text-[120px] lg:text-[180px] leading-[0.85] tracking-[-0.06em] text-ink">
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

