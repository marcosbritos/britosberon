import Image from "next/image";

interface BBLogoProps {
  variant?: 'full' | 'circle' | 'mark' | 'mark-ink' | 'mark-bone';
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BBLogo({ variant = 'mark-ink', className = "", style = {} }: BBLogoProps) {
  // PNG del logo subido por Marcos, exportado desde Canva con fondo transparente
  // Se usa TAL CUAL, sin modificaciones al diseño
  // - mark-ink (default): colores originales para fondos claros (header, drawer)  
  // - mark-bone: invertido para fondos oscuros (footer)
  
  const isBone = variant === 'mark-bone';

  return (
    <img 
      src="/logo.png" 
      alt="Britos Berón · Estudio digital" 
      style={{ 
        width: 'auto', 
        display: 'block',
        filter: isBone ? 'invert(1) hue-rotate(180deg) brightness(1.05) saturate(0.85)' : 'none',
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
