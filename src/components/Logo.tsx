import Image from "next/image";

interface BBLogoProps {
  variant?: 'full' | 'circle' | 'mark' | 'mark-ink' | 'mark-bone';
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BBLogo({ variant = 'mark-ink', height = 60, className = "", style = {} }: BBLogoProps) {
  const src = {
    'full':       '/assets/logo-circle.png',
    'circle':     '/assets/logo-circle.png',
    'mark':       '/assets/logo-mark.png',
    'mark-ink':   '/assets/logo-mark-ink.png',
    'mark-bone':  '/assets/logo-mark-bone.png',
  }[variant] || '/assets/logo-mark.png';

  return (
    <img 
      src={src} 
      alt="B&B Logo" 
      style={{ height, width: 'auto', display: 'block', ...style }} 
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
