import Image from "next/image";

interface BBLogoProps {
  variant?: 'full' | 'circle' | 'mark' | 'mark-ink' | 'mark-bone';
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BBLogo({ variant = 'mark-ink', className = "", style = {} }: BBLogoProps) {
  // Monograma BB (dos B espejadas con divisor central)
  // variant 'mark-bone' = color hueso para fondos oscuros (footer)
  // variant cualquier otro = color ink para fondos claros (header, drawer)
  
  const src = variant === 'mark-bone' 
    ? '/logo-bb-bone.png'
    : '/logo-bb-ink.png';

  return (
    <img 
      src={src} 
      alt="Britos Berón" 
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
