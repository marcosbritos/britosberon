// brand.jsx — Brand system artboards
// BrandMark · Lockup · Color · Type · Grid

const _bb_FONTSTACK_DISPLAY = '"Bricolage Grotesque", system-ui, sans-serif';
const _bb_FONTSTACK_SERIF   = '"Instrument Serif", Georgia, serif';
const _bb_FONTSTACK_MONO    = '"JetBrains Mono", ui-monospace, monospace';

const C = {
  bone: '#F2EFE6',
  bone2: '#E8E4D8',
  ink: '#0A1F2A',
  ink2: '#142A36',
  mute: '#6B6962',
  acc: '#1FA3B5',     // teal — color principal de marca
  acc2: '#0E6B7C',    // teal profundo
  gold: '#C9A961',    // champagne — acento secundario
};

// ─────────────────────────────────────────────────────────────
// Reusable artboard background + frame label
// ─────────────────────────────────────────────────────────────
function ABFrame({ children, bg = C.bone, fg = C.ink, label, tag, width = 800, height = 600 }) {
  return (
    <div className="bb" style={{
      position:'relative', width, height, background:bg, color:fg, overflow:'hidden',
      fontFamily: _bb_FONTSTACK_DISPLAY,
    }}>
      {/* corner ticks */}
      <Tick pos={{top:14,left:14}} />
      <Tick pos={{top:14,right:14}} />
      <Tick pos={{bottom:14,left:14}} />
      <Tick pos={{bottom:14,right:14}} />
      {/* top/bottom hairlines */}
      <div style={{position:'absolute',left:14,right:14,top:14,height:1,background:fg,opacity:.18}} />
      <div style={{position:'absolute',left:14,right:14,bottom:14,height:1,background:fg,opacity:.18}} />
      {/* label strip */}
      {label && (
        <div style={{
          position:'absolute', top:22, left:32, right:32,
          display:'flex', justifyContent:'space-between',
          fontFamily:_bb_FONTSTACK_MONO, fontSize:10, letterSpacing:'.18em',
          textTransform:'uppercase', color:fg, opacity:.7,
        }}>
          <span>{label}</span>
          <span>{tag}</span>
        </div>
      )}
      <div className="bb-grain" />
      {children}
    </div>
  );
}
function Tick({ pos }) {
  return (
    <div style={{position:'absolute',width:8,height:8,...pos}}>
      <div className="bb-cross" style={{position:'absolute',inset:0,color:'currentColor',opacity:.45}} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BBLogo — the actual brand mark, with variants.
//   variant: 'full' | 'mark' | 'mark-ink' | 'mark-bone' | 'circle'
// ─────────────────────────────────────────────────────────────
function BBLogo({ variant = 'mark-ink', height = 60, style = {} }) {
  const src = {
    'full':       'assets/logo-circle.png',
    'circle':     'assets/logo-circle.png',
    'mark':       'assets/logo-mark.png',
    'mark-ink':   'assets/logo-mark-ink.png',
    'mark-bone':  'assets/logo-mark-bone.png',
  }[variant] || 'assets/logo-mark.png';
  return <img src={src} alt="B&B" style={{ height, width:'auto', display:'block', ...style }} />;
}

// ─────────────────────────────────────────────────────────────
// The ampersand mark — our brand monogram
// ─────────────────────────────────────────────────────────────
function BBAmpersand({ size = 480, color = C.ink, italic = true }) {
  return (
    <span style={{
      fontFamily: _bb_FONTSTACK_SERIF,
      fontStyle: italic ? 'italic' : 'normal',
      fontSize: size, lineHeight: .82, color,
      display:'inline-block', letterSpacing:'-.04em',
    }}>&amp;</span>
  );
}

// ─────────────────────────────────────────────────────────────
// 1 — BRAND MARK · the actual logo, presented as a hero specimen
// ─────────────────────────────────────────────────────────────
function BoardBrandMark() {
  return (
    <ABFrame label="01 / Marca primaria" tag="B&B · monograma" width={900} height={900}>
      {/* construction crosshair */}
      <svg viewBox="0 0 900 900" style={{position:'absolute',inset:0,color:C.acc,opacity:.45}}>
        <circle cx="450" cy="460" r="320" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4"/>
        <line x1="60" y1="460" x2="840" y2="460" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4"/>
        <line x1="450" y1="100" x2="450" y2="820" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4"/>
      </svg>
      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <BBLogo variant="mark" height={520} />
      </div>
      <Anno top={150} left={60} text="x-altura" />
      <Anno bottom={170} left={60} text="baseline" />
      <Anno top={150} right={60} text="cap → 520u" align="right"/>
      <Anno bottom={170} right={60} text="& · diagonal 45°" align="right"/>
      <Caption bottom={50} center text="BRITOS & BERÓN · LA ‘Y’ QUE NOS UNE · GESTIÓN | EVOLUCIÓN DIGITAL" />
    </ABFrame>
  );
}
function Anno({ top, left, right, bottom, text, align='left' }) {
  return (
    <div style={{
      position:'absolute', top, left, right, bottom, color:C.acc,
      fontFamily:_bb_FONTSTACK_MONO, fontSize:10, letterSpacing:'.08em',
      textAlign: align,
    }}>
      <span style={{borderBottom:`1px solid ${C.acc}`, paddingBottom:2}}>{text}</span>
    </div>
  );
}
function Caption({ top, bottom, left, right, center, text, color=C.ink }) {
  return (
    <div style={{
      position:'absolute', top, bottom, left: center?0:left, right: center?0:right,
      textAlign:center?'center':'left',
      fontFamily:_bb_FONTSTACK_MONO, fontSize:10, letterSpacing:'.16em',
      textTransform:'uppercase', color, opacity:.85,
    }}>{text}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// 2 — LOCKUP variations · showing how the mark sits in real use
// ─────────────────────────────────────────────────────────────
function BoardLockup() {
  return (
    <ABFrame label="02 / Lockups" tag="primario · sello · reducido · sobre acento" width={1100} height={780}>
      {/* A · Primario sobre bone */}
      <div style={{
        position:'absolute', top:80, left:60, right:60, padding:'36px 0',
        borderTop:`1px solid ${C.ink}33`, borderBottom:`1px solid ${C.ink}33`,
      }}>
        <Caption top={-22} left={0} text="A · Primario · header web" />
        <div style={{display:'flex', alignItems:'center', gap:24, marginTop:8}}>
          <BBLogo variant="mark-ink" height={88} />
          <div style={{borderLeft:`1px solid ${C.ink}33`, height:64, marginLeft:6, paddingLeft:24,
            fontFamily:_bb_FONTSTACK_mono_safe(), fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', lineHeight:1.7, color:C.ink}}>
            BRITOS &amp; BERÓN<br/>
            <span style={{color:C.mute}}>Gestión | Evolución digital</span>
          </div>
          <div style={{flex:1}} />
          <div style={{textAlign:'right', fontFamily:_bb_FONTSTACK_mono_safe(), fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:C.mute}}>
            EST. MMXXV · BUENOS AIRES, AR
          </div>
        </div>
      </div>

      {/* B · Sello circular */}
      <div style={{position:'absolute', bottom:90, left:60}}>
        <Caption top={-22} left={0} text="B · Sello · stories / avatar" />
        <div style={{
          width:210, height:210, borderRadius:'50%', overflow:'hidden',
          background:'#fff', position:'relative', boxShadow:'0 8px 30px rgba(10,31,42,.12)',
        }}>
          <BBLogo variant="full" height={210} style={{height:210, width:210, objectFit:'cover'}}/>
        </div>
      </div>

      {/* C · Sobre teal (acento) */}
      <div style={{position:'absolute', bottom:90, left:310, width:260, height:210,
        background:C.acc, display:'flex', alignItems:'center', justifyContent:'center', position:'absolute'}}>
        <Caption top={-22} left={0} text="C · Sobre acento" />
        <BBLogo variant="mark-bone" height={120} />
      </div>

      {/* D · Sobre ink (oscuro) */}
      <div style={{position:'absolute', bottom:90, left:600, width:260, height:210,
        background:C.ink, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Caption top={-22} left={0} text="D · Sobre oscuro" />
        <BBLogo variant="mark-bone" height={120} />
      </div>

      {/* E · Reducido */}
      <div style={{position:'absolute', bottom:90, right:60, width:120, height:210,
        border:`1px solid ${C.ink}33`, display:'flex', flexDirection:'column'}}>
        <Caption top={-22} left={0} text="E · Mínimo · favicon" />
        <div style={{flex:1, background:C.bone, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <BBLogo variant="mark-ink" height={56} />
        </div>
        <div style={{borderTop:`1px solid ${C.ink}22`, padding:'10px 12px', textAlign:'center',
          fontFamily:_bb_FONTSTACK_mono_safe(), fontSize:9, letterSpacing:'.18em', textTransform:'uppercase'}}>
          16 → 32 px
        </div>
      </div>
    </ABFrame>
  );
}
function _bb_FONTSTACK_mono_safe(){ return _bb_FONTSTACK_MONO; }

// ─────────────────────────────────────────────────────────────
// 3 — COLOR
// ─────────────────────────────────────────────────────────────
function BoardColor() {
  const swatches = [
    { name:'Bone',     hex:'#F2EFE6', role:'Superficie principal',     fg:C.ink },
    { name:'Ink',      hex:'#0A1F2A', role:'Texto / contraste máximo', fg:C.bone },
    { name:'Teal',     hex:'#1FA3B5', role:'Acento principal · CTAs',  fg:C.bone },
    { name:'Champagne',hex:'#C9A961', role:'Acento secundario',         fg:C.ink },
    { name:'Bone-2',   hex:'#E8E4D8', role:'Superficie alterna',        fg:C.ink },
    { name:'Ink-2',    hex:'#142A36', role:'Dark superficie',           fg:C.bone },
  ];
  return (
    <ABFrame label="03 / Paleta" tag="3 + 3 · contraste AAA" width={1000} height={700}>
      <div style={{position:'absolute', top:80, left:60, right:60}}>
        <div style={{display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr', gap:0, border:`1px solid ${C.ink}22`}}>
          {/* Big primary */}
          <div style={{aspectRatio:'1 / 1.1', background:swatches[0].hex, padding:24, color:swatches[0].fg,
            display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative'}}>
            <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase'}}>01 · primario</div>
            <div>
              <div style={{fontFamily:_bb_FONTSTACK_SERIF, fontStyle:'italic', fontSize:72, lineHeight:1}}>{swatches[0].name}</div>
              <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:12, marginTop:8}}>{swatches[0].hex}</div>
              <div style={{fontFamily:_bb_FONTSTACK_DISPLAY, fontSize:13, marginTop:10, opacity:.7}}>{swatches[0].role}</div>
            </div>
          </div>
          {/* 3 minor cols, two rows */}
          {[1,2,4,3,5].map(i => {
            const s = swatches[i];
            return (
              <div key={i} style={{aspectRatio: i===2?'1 / 1.1':'1 / 0.55', background:s.hex, padding:18, color:s.fg,
                gridColumn: i===2? 2: undefined, gridRow: i===2? 'span 2': undefined,
                display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', opacity:.85}}>0{i+1}</div>
                <div>
                  <div style={{fontFamily:_bb_FONTSTACK_DISPLAY, fontWeight:600, fontSize: i===2?42:22, lineHeight:1}}>{s.name}</div>
                  <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, marginTop:4, opacity:.8}}>{s.hex}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Caption bottom={42} left={60} text="REGLA · Teal y Champagne mantienen el alma metálica del logo. Aplicar con criterio." color={C.acc}/>
    </ABFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// 4 — TYPOGRAPHY specimen
// ─────────────────────────────────────────────────────────────
function BoardType() {
  return (
    <ABFrame label="04 / Tipografía" tag="3 voces · 1 sistema" width={1100} height={780}>
      <div style={{position:'absolute', top:90, left:60, right:60}}>
        {/* Display sans */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid ${C.ink}33`, paddingTop:16}}>
          <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase'}}>Display · Bricolage Grotesque</div>
          <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:10, color:C.mute, letterSpacing:'.1em'}}>300 → 800 · variable</div>
        </div>
        <div style={{fontFamily:_bb_FONTSTACK_DISPLAY, fontWeight:600, fontSize:120, lineHeight:.95, letterSpacing:'-.04em', marginTop:8}}>
          Lo ponemos online.
        </div>

        {/* Italic serif */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid ${C.ink}33`, paddingTop:16, marginTop:24}}>
          <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase'}}>Editorial · Instrument Serif Italic</div>
          <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:10, color:C.mute, letterSpacing:'.1em'}}>solo para énfasis</div>
        </div>
        <div style={{fontFamily:_bb_FONTSTACK_SERIF, fontStyle:'italic', fontWeight:400, fontSize:112, lineHeight:1, color:C.acc, marginTop:0}}>
          no existe<span style={{color:C.ink}}>.</span>
        </div>

        {/* Mono */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid ${C.ink}33`, paddingTop:16, marginTop:24}}>
          <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase'}}>Caption · JetBrains Mono</div>
          <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:10, color:C.mute, letterSpacing:'.1em'}}>técnico · números · meta</div>
        </div>
        <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:18, marginTop:10, lineHeight:1.7, color:C.ink}}>
          [01 — comercios]&nbsp;&nbsp;[02 — deportes]&nbsp;&nbsp;[03 — belleza]<br/>
          ESTUDIO B&B · BUENOS AIRES · ESTAB. MMXXV · 4°36′S 58°22′W
        </div>
      </div>
    </ABFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// 5 — GRID system / specimen
// ─────────────────────────────────────────────────────────────
function BoardGrid() {
  return (
    <ABFrame label="05 / Sistema" tag="12 cols · 24 baseline" width={1100} height={700}>
      <div style={{position:'absolute', top:80, left:60, right:60, bottom:60,
        display:'grid', gridTemplateColumns:'repeat(12, 1fr)', gap:8, position:'relative'}}>
        {Array.from({length:12}).map((_,i) => (
          <div key={i} style={{background:`${C.acc}10`, border:`1px dashed ${C.acc}55`, position:'relative'}}>
            <span style={{position:'absolute',top:4,left:4,fontFamily:_bb_FONTSTACK_MONO,fontSize:9,color:C.acc,letterSpacing:'.05em'}}>{String(i+1).padStart(2,'0')}</span>
          </div>
        ))}
      </div>
      <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, pointerEvents:'none'}}>
        <div style={{position:'absolute', top:80, left:60, right:60, bottom:60, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <div>
            <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:C.ink, background:C.bone, padding:'4px 8px', display:'inline-block'}}>12 columnas · gap 8 · margen 60</div>
          </div>
          <div style={{
            background:C.ink, color:C.bone, padding:'40px 36px',
            fontFamily:_bb_FONTSTACK_DISPLAY, fontWeight:600, fontSize:64, lineHeight:.95, letterSpacing:'-.03em',
            gridColumn:'4 / span 9', maxWidth:'70%',
          }}>
            La <span style={{fontFamily:_bb_FONTSTACK_SERIF, fontStyle:'italic', color:C.acc, fontWeight:400}}>grilla</span> es la marca.
            <div style={{fontFamily:_bb_FONTSTACK_MONO, fontSize:11, letterSpacing:'.2em', textTransform:'uppercase', marginTop:18, color:C.bone, opacity:.6}}>
              Si la ves, está mal. Si la sentís, está bien.
            </div>
          </div>
        </div>
      </div>
    </ABFrame>
  );
}

Object.assign(window, {
  BBAmpersand, BBLogo, ABFrame, Tick, Anno, Caption,
  BoardBrandMark, BoardLockup, BoardColor, BoardType, BoardGrid,
  BB_C: C,
  BB_FONTS: { display:_bb_FONTSTACK_DISPLAY, serif:_bb_FONTSTACK_SERIF, mono:_bb_FONTSTACK_MONO },
});
