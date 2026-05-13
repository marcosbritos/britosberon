import Link from "next/link";

interface LogoProps {
  context?: string;
  variant?: "light" | "dark";
  accentColor?: string;
}

export function Logo({ context, variant = "light", accentColor }: LogoProps) {
  const isLight = variant === "light";
  const bgClass = isLight ? "bg-white text-ink-900" : "bg-ink-900 text-white";
  const textClass = isLight ? "text-white" : "text-ink-900";
  const subtleClass = isLight ? "text-white/45" : "text-ink-900/45";

  return (
    <Link href="/" className="inline-flex items-center gap-3 group">
      <div
        className={`flex items-center justify-center w-11 h-7 ${bgClass} rounded`}
      >
        <span className="font-serif text-[14px] font-bold tracking-tighter">B&B</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-[14px] font-semibold ${textClass} tracking-tight`}>
          Britos Berón
        </span>
        {context ? (
          <span
            className="text-[10px] font-medium tracking-[0.05em] mt-0.5"
            style={{ color: accentColor }}
          >
            / {context}
          </span>
        ) : (
          <span className={`text-[9px] ${subtleClass} tracking-[0.15em] uppercase mt-0.5`}>
            Estudio Digital
          </span>
        )}
      </div>
    </Link>
  );
}
