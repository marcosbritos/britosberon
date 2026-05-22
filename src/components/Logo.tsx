import Image from "next/image";

interface BBLogoProps {
  variant?: 'full' | 'circle' | 'mark' | 'mark-ink' | 'mark-bone';
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BBLogo({ variant = 'mark-ink', className = "", style = {} }: BBLogoProps) {
  // Para fondos claros (header, drawer): logo COMPLETO con texto integrado
  //   → /logo-bb-full-ink.png (monograma + BRITOS BERÓN | ESTUDIO DIGITAL + línea cyan)
  // Para fondos oscuros (footer): solo el monograma BB en color hueso
  //   → /logo-bb-bone.png
  
  const src = variant === 'mark-bone' 
    ? '/logo-bb-bone.png'        // Solo monograma BB, color bone para footer
    : '/logo-bb-full-ink.png';   // Logo completo con texto para header

  return (
    <img 
      src={src} 
      alt="Britos Berón · Estudio digital" 
      style={{ 
        width: 'auto', 
        display: 'block',
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
