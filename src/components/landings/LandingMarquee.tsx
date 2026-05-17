import React from "react";

interface LandingMarqueeProps {
  items: string[];
}

export function LandingMarquee({ items }: LandingMarqueeProps) {
  return (
    <div className="bg-ink text-bone overflow-hidden border-b border-ink/10 font-mono text-[10px] md:text-[12px] tracking-widest py-2 md:py-[10px] uppercase">
      <div className="bb-mq-track">
        {Array.from({ length: 6 }).flatMap((_, k) =>
          items.map((t, i) => (
            <span
              key={`${k}-${i}`}
              className="inline-flex items-center gap-6 md:gap-[48px]"
            >
              {t}
              <span className="font-serif italic text-acc text-[18px] md:text-[22px] leading-none -translate-y-0.5">
                &amp;
              </span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
