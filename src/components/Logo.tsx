import Image from "next/image";

interface BBLogoProps {
  variant?: 'full' | 'circle' | 'mark' | 'mark-ink' | 'mark-bone';
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BBLogo({ variant = 'mark-ink', className = "", style = {} }: BBLogoProps) {
  // SVG original tal cual lo subió Marcos (sin modificaciones al diseño)
  // Solo se removió el metadata de Canva para reducir tamaño
  // - mark-ink (default): logo en sus colores originales
  // - mark-bone: mismo logo pero filtrado a color hueso para fondos oscuros (footer)
  
  const isBone = variant === 'mark-bone';

  return (
    <img 
      src="/logo-bb.svg" 
      alt="Britos Berón · Estudio digital" 
      style={{ 
        width: 'auto', 
        display: 'block',
        // Para footer oscuro: invertir colores para que el logo se vea claro
        filter: isBone ? 'invert(1) brightness(0.95) sepia(0.1) saturate(0.3)' : 'none',
        ...style 
      }} 
      className={className} 
    />
  );
}

interface BBAmpersandProps {
  size?: number | string;
  className?: string;
  italic?: boolean;
}

export function BBAmpersand({ size = 480, className = "text-ink", italic = true }: BBAmpersandProps) {
  return (
    <span 
      className={`font-serif leading-[0.82] inline-block tracking-[-0.04em] ${italic ? 'italic' : 'not-italic'} ${className}`}
      style={{ fontSize: size }}
    >
      &amp;
    </span>
  );
}
