// campaign.jsx — Poster manifesto + OOH billboard + Business card

// ─────────────────────────────────────────────────────────────
// POSTER A2 portrait (594 x 841 → scaled for canvas)
// ─────────────────────────────────────────────────────────────
const POSTER_W = 800;
const POSTER_H = 1132;

function PosterManifesto() {
  return (
    <div style={{
      width: POSTER_W, height: POSTER_H, background: BB_C.bone, color: BB_C.ink,
      position:'relative', overflow:'hidden', fontFamily: BB_FONTS.display,
    }}>
      <div className="bb-grain"/>
      {/* corner ticks */}
      <Tick pos={{top:20,left:20}}/>
      <Tick pos={{top:20,right:20}}/>
      <Tick pos={{bottom:20,left:20}}/>
      <Tick pos={{bottom:20,right:20}}/>
      {/* top masthead */}
      <div style={{position:'absolute', top:46, left:54, right:54,
        display:'flex', justifyContent:'space-between', alignItems:'baseline',
        fontFamily:BB_FONTS.mono, fontSize:13, letterSpacing:'.22em', textTransform:'uppercase',
        paddingBottom:14, borderBottom:`1.5px solid ${BB_C.ink}`}}>
        <span>El periódico de B&amp;B</span>
        <span>N.° 01</span>
        <span>MMXXV</span>
        <span>Bs. As. AR</span>
        <span>Edición limitada</span>
      </div>

      {/* Headline */}
      <div style={{position:'absolute', top:120, left:54, right:54}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.acc, marginBottom:12}}>↳ Manifiesto</div>
        <h1 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:114, lineHeight:.9, letterSpacing:'-.045em'}}>
          Si tu negocio<br/>
          no está en<br/>
          internet,<br/>
          <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400}}>no existe.</span>
        </h1>
      </div>

      {/* Asterisk visual + body */}
      <div style={{position:'absolute', top:560, left:54, right:54}}>
        <div style={{display:'grid', gridTemplateColumns:'180px 1fr', gap:24, alignItems:'start'}}>
          <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:260, lineHeight:.55, color:BB_C.acc, marginTop:-30}}>*</span>
          <p style={{margin:0, fontFamily:BB_FONTS.display, fontSize:18, lineHeight:1.5, color:BB_C.ink, maxWidth:480}}>
            <b>Existe.</b> Pero nadie lo encuentra. Y los que no se encuentran no se compran. Para eso estamos: para que tu negocio aparezca, atienda, venda y no duerma nunca. Sin pago grande, sin contrato eterno, sin call center. Te atendemos nosotros, por WhatsApp, en menos de 24 horas.
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{position:'absolute', bottom:54, left:54, right:54}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline',
          fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.18em', textTransform:'uppercase',
          paddingTop:14, borderTop:`1.5px solid ${BB_C.ink}`, marginTop:30}}>
          <span>britosberon.com.ar</span>
          <span>@britosberon</span>
          <span>+54 9 11 0000 0000</span>
          <span>hola@britosberon</span>
        </div>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginTop:26}}>
          <BBLogo variant="mark-ink" height={92}/>
          <div style={{fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.mute, textAlign:'right', lineHeight:1.7}}>
            Gestión y Desarrollo Digital<br/>
            Estab. MMXXV<br/>
            Buenos Aires, AR
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OOH — Billboard mockup (16:9 wall scene)
// ─────────────────────────────────────────────────────────────
const OOH_W = 1400;
const OOH_H = 880;

function BillboardOOH() {
  return (
    <div style={{width:OOH_W, height:OOH_H, background:'#bdbab1', position:'relative', overflow:'hidden', fontFamily:BB_FONTS.display}}>
      {/* sky / wall grain */}
      <div className="bb-grain" />
      <svg viewBox="0 0 1400 880" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
        <defs>
          <linearGradient id="bbwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cdc8be"/>
            <stop offset="1" stopColor="#a5a097"/>
          </linearGradient>
        </defs>
        <rect width="1400" height="880" fill="url(#bbwall)"/>
        {/* horizon */}
        <rect y="640" width="1400" height="240" fill="#5a5651"/>
        {/* street markings */}
        <rect x="0" y="780" width="1400" height="6" fill="#dad6cc" opacity=".7"/>
        {Array.from({length:14}).map((_,i) => (
          <rect key={i} x={i*120 + 30} y="820" width="60" height="6" fill="#dad6cc" opacity=".55"/>
        ))}
      </svg>

      {/* Billboard panel */}
      <div style={{
        position:'absolute', top:90, left:140, right:140, height:520,
        background:BB_C.bone, color:BB_C.ink, padding:'46px 56px',
        boxShadow:'0 30px 80px rgba(0,0,0,.35), 0 -2px 0 #6b6862 inset',
        overflow:'hidden',
      }}>
        <div className="bb-grain"/>
        {/* mark */}
        <div style={{position:'absolute', top:14, right:24}}>
          <BBLogo variant="mark-ink" height={50}/>
        </div>
        <div style={{position:'absolute', top:30, left:46, fontFamily:BB_FONTS.mono, fontSize:13, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.acc}}>
          ↳ Si tu negocio aparece en la calle…
        </div>
        <h2 style={{margin:'78px 0 0', fontFamily:BB_FONTS.display, fontWeight:600, fontSize:182, lineHeight:.88, letterSpacing:'-.045em'}}>
          ¿Por qué<br/>no aparece<br/>en <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400}}>Google</span>?
        </h2>
        <div style={{position:'absolute', bottom:26, left:56, right:56, display:'flex', justifyContent:'space-between',
          fontFamily:BB_FONTS.mono, fontSize:15, letterSpacing:'.2em', textTransform:'uppercase'}}>
          <span>britosberon.com.ar</span>
          <span style={{color:BB_C.acc}}>→ Hablemos por WhatsApp</span>
        </div>
      </div>
      {/* poles */}
      <div style={{position:'absolute', left:200, top:610, width:14, height:160, background:'#3e3a35'}}/>
      <div style={{position:'absolute', right:200, top:610, width:14, height:160, background:'#3e3a35'}}/>

      {/* caption */}
      <div style={{position:'absolute', bottom:24, left:32, fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.2em', textTransform:'uppercase', color:BB_C.ink}}>
        OOH · 8×3 mts · Av. Corrientes · Bs. As.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BUSINESS CARD — 85 × 55 → scaled up
// ─────────────────────────────────────────────────────────────
function BizCard() {
  const W = 560, H = 360;
  return (
    <div style={{width:W*2 + 40, height:H, position:'relative', display:'flex', gap:40, alignItems:'center'}}>
      {/* FRONT */}
      <div style={{width:W, height:H, background:BB_C.bone, color:BB_C.ink, position:'relative', overflow:'hidden', fontFamily:BB_FONTS.display, boxShadow:'0 18px 40px rgba(0,0,0,.18)'}}>
        <div className="bb-grain"/>
        <div style={{position:'absolute', top:24, left:28, right:28, display:'flex', justifyContent:'space-between',
          fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase'}}>
          <span>Britos &amp; Berón</span>
          <span>· EST. 2025 ·</span>
          <span>Bs. As. AR</span>
        </div>
        <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <BBLogo variant="mark-ink" style={{height:260, width:'auto'}}/>
        </div>
        <div style={{position:'absolute', bottom:24, left:28, right:28, display:'flex', justifyContent:'space-between',
          fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase'}}>
          <span>britosberon.com.ar</span>
          <span>Gestión y Desarrollo Digital</span>
        </div>
      </div>
      {/* BACK */}
      <div style={{width:W, height:H, background:BB_C.ink, color:BB_C.bone, position:'relative', overflow:'hidden', fontFamily:BB_FONTS.display, padding:32, boxShadow:'0 18px 40px rgba(0,0,0,.18)'}}>
        <div className="bb-grain dark"/>
        <div style={{position:'relative', fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:`${BB_C.bone}88`}}>
          ↳ Tarjeta personal
        </div>
        <h3 style={{position:'relative', margin:'24px 0 6px', fontFamily:BB_FONTS.display, fontWeight:600, fontSize:42, letterSpacing:'-.02em', lineHeight:1}}>
          Marcos<br/>Britos
        </h3>
        <div style={{position:'relative', fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:22, color:BB_C.acc}}>
          fundador &amp; diseñador
        </div>
        <div style={{position:'absolute', bottom:32, left:32, right:32, paddingTop:14, borderTop:`1px solid ${BB_C.bone}33`,
          fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.15em', lineHeight:1.7}}>
          marcos@britosberon<br/>
          +54 9 11 0000 0000<br/>
          <span style={{color:BB_C.acc}}>britosberon.com.ar</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// STICKER PACK / merch wall
// ─────────────────────────────────────────────────────────────
function StickerSheet() {
  const W = 900, H = 700;
  const stickers = [
    { t:<>Si tu negocio no está en internet, <i style={{color:BB_C.acc, fontFamily:BB_FONTS.serif}}>no existe.*</i></>, bg:BB_C.bone, fg:BB_C.ink, shape:'rect', big:true },
    { t:<BBLogo variant="mark-bone" style={{height:120, width:'auto'}}/>, bg:BB_C.ink, fg:BB_C.bone, shape:'circle' },
    { t:<><b>Soluciones<br/>a medida</b></>, bg:BB_C.acc, fg:BB_C.bone, shape:'rect' },
    { t:<>Gestión y<br/><i style={{fontFamily:BB_FONTS.serif, color:BB_C.acc}}>desarrollo</i><br/>digital</>, bg:BB_C.bone2, fg:BB_C.ink, shape:'rect' },
    { t:<BBLogo variant="mark-ink" style={{height:60, width:'auto'}}/>, bg:BB_C.bone, fg:BB_C.ink, shape:'pill' },
    { t:<>WhatsApp<br/><span style={{fontFamily:BB_FONTS.mono, fontSize:14, letterSpacing:'.18em'}}>≤ 24 H</span></>, bg:BB_C.ink, fg:BB_C.acc, shape:'circle' },
  ];
  return (
    <div style={{width:W, height:H, background:'#d5d0c4', position:'relative', overflow:'hidden', padding:40}}>
      <div className="bb-grain"/>
      <div style={{position:'relative', display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gridTemplateRows:'1fr 1fr', gap:24, width:'100%', height:'100%'}}>
        {stickers.map((s,i) => {
          const radius = s.shape==='circle' ? '50%' : s.shape==='pill' ? '999px' : 12;
          const padd = s.big ? '36px 38px' : '24px 28px';
          return (
            <div key={i} style={{
              gridColumn: i===0?'1 / span 2' : undefined,
              background:s.bg, color:s.fg, borderRadius:radius, padding:padd,
              display:'flex', alignItems:'center', justifyContent:s.shape==='circle'?'center':'flex-start',
              fontFamily:BB_FONTS.display, fontWeight:600, fontSize: s.big?52:34, lineHeight:1.05, letterSpacing:'-.025em',
              boxShadow:'0 8px 30px rgba(0,0,0,.18), inset 0 0 0 2px rgba(255,255,255,.04)',
              transform: `rotate(${[-2,3,-1,2,-4,1][i]}deg)`,
              position:'relative',
            }}>
              <div className="bb-grain" style={{borderRadius:radius}}/>
              <div style={{position:'relative'}}>{s.t}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, {
  PosterManifesto, BillboardOOH, BizCard, StickerSheet,
  POSTER_W, POSTER_H, OOH_W, OOH_H,
});
