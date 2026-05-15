import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  context?: string;
  variant?: "light" | "dark";
  accentColor?: string;
}

export function Logo({ context, variant = "light", accentColor }: LogoProps) {
  const isLight = variant === "light";
  const textClass = isLight ? "text-white" : "text-ink-900";
  const subtleClass = isLight ? "text-white/45" : "text-ink-900/45";

  return (
    <Link href="/" className="inline-flex items-center gap-3 group">
      <div className="relative w-10 h-10 overflow-hidden rounded-md shrink-0">
        <Image
          src="/logo.png"
          alt="B&B Logo"
          fill
          className={`object-contain ${isLight ? "brightness-0 invert" : ""}`}
          priority
        />
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
