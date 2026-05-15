import React from "react";
import Link from "next/link";
import { BBLogo } from "./Logo";
import { BB_C, BB_FONTS } from "@/lib/design";

export function Header({ whatsappMessage }: { context?: string; accentColor?: string; whatsappMessage?: string; variant?: "dark" | "light" }) {
  const waUrl = whatsappMessage 
    ? `https://wa.me/5491169299378?text=${encodeURIComponent(whatsappMessage)}` 
    : "https://wa.me/5491169299378";

  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'22px 56px', borderBottom:`1px solid ${BB_C.ink}1A`,
      background:BB_C.bone, position:'relative', zIndex:50,
    }}>
      <div style={{display:'flex', alignItems:'center', gap:18}}>
        <Link href="/">
          <BBLogo variant="mark-ink" height={52} />
        </Link>
        <div className="hidden md:block" style={{borderLeft:`1px solid ${BB_C.ink}22`, paddingLeft:18,
          fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', lineHeight:1.7, color:BB_C.ink}}>
          BRITOS &amp; BERÓN<br/>
          <span style={{color:BB_C.mute}}>Gestión y Desarrollo Digital</span>
        </div>
      </div>
      <nav className="hidden lg:flex" style={{gap:36, fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase'}}>
        <Link href="/comercios"><sup style={{color:BB_C.acc, marginRight:6}}>01</sup>Comercios</Link>
        <Link href="/deportes"><sup style={{color:BB_C.acc, marginRight:6}}>02</sup>Deportes</Link>
        <Link href="/belleza"><sup style={{color:BB_C.acc, marginRight:6}}>03</sup>Belleza</Link>
      </nav>
      <a href={waUrl} target="_blank" rel="noreferrer" style={{
        background:BB_C.ink, color:BB_C.bone, padding:'12px 18px',
        fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase',
        display:'inline-flex', alignItems:'center', gap:10, textDecoration:'none',
      }}>
        <span style={{width:8, height:8, background:BB_C.acc, borderRadius:'50%', boxShadow:`0 0 0 3px ${BB_C.acc}33`}}/>
        WhatsApp
      </a>
    </header>
  );
}
