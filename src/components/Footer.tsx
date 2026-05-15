import React from "react";
import { BBLogo } from "./Logo";
import { BB_C, BB_FONTS } from "@/lib/design";

export function Footer() {
  return (
    <footer style={{background:BB_C.ink, color:BB_C.bone, padding:'56px 56px 30px'}}>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr', gap:32, borderBottom:`1px solid ${BB_C.bone}22`, paddingBottom:36}}>
        <div>
          <BBLogo variant="mark-bone" height={70} />
          <p style={{maxWidth:340, fontFamily:BB_FONTS.display, fontSize:15, lineHeight:1.5, color:`${BB_C.bone}aa`, marginTop:18}}>
            Gestión y Desarrollo Digital para negocios de Argentina. Webs, sistemas, torneos, ecommerce. Buenos Aires, AR.
          </p>
        </div>
        {[
          ['Servicios',['Desarrollo web','Sistema de turnos','Ecommerce','Automatización','Apps móviles']],
          ['Productos',['B&B Comercio','B&B Deportes','B&B Belleza','B&B Profesional ↗']],
          ['Estudio',['Quiénes somos','Cómo trabajamos','Contacto','Trabajá con nosotros']],
          ['Contacto',['WhatsApp +54 9 11','hola@britosberon','@britosberon','Bs. As., AR']],
        ].map(([t,items]) => (
          <div key={t as string}>
            <div style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:`${BB_C.bone}66`, marginBottom:16}}>{t}</div>
            <ul style={{listStyle:'none', padding:0, margin:0}}>
              {(items as string[]).map(x => <li key={x} style={{fontFamily:BB_FONTS.display, fontSize:13, lineHeight:1.9, color:BB_C.bone}}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{marginTop:24, display:'flex', justifyContent:'space-between', fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:`${BB_C.bone}66`}}>
        <span>© {new Date().getFullYear()} Britos &amp; Berón · Todos los derechos reservados</span>
        <span>Términos · Privacidad · Cookies</span>
        <span>v1.0 · Build {new Date().toISOString().split('T')[0].replace(/-/g, '.')}</span>
      </div>
    </footer>
  );
}
