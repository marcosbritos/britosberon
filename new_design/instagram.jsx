// instagram.jsx — Instagram campaign assets
// 9-grid feed (designed to read as one composition AND as 9 individual posts)
// + Story templates + Carousel anatomy.

const IGSIZE = 1080;
const STORY_W = 1080;
const STORY_H = 1920;

// ─────────────────────────────────────────────────────────────
// Post primitives
// ─────────────────────────────────────────────────────────────
function PostFrame({ children, bg = BB_C.bone, fg = BB_C.ink, n, label, marks = true, style = {} }) {
  return (
    <div style={{
      width: IGSIZE, height: IGSIZE, background: bg, color: fg, position:'relative',
      overflow:'hidden', fontFamily: BB_FONTS.display, ...style,
    }}>
      {marks && (
        <>
          <div style={{position:'absolute', top:40, left:48, right:48, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <BBLogo variant={fg === BB_C.bone || fg === BB_C.acc ? 'mark-bone' : 'mark-ink'} height={48} style={{opacity:.95}}/>
            <span style={{fontFamily:BB_FONTS.mono, fontSize:22, letterSpacing:'.22em', textTransform:'uppercase', opacity:.7}}>{n}</span>
          </div>
          <div style={{position:'absolute', bottom:40, left:48, right:48, display:'flex', justifyContent:'space-between',
            fontFamily:BB_FONTS.mono, fontSize:18, letterSpacing:'.2em', textTransform:'uppercase', opacity:.55}}>
            <span>britosberon.com.ar</span>
            <span>@britosberon</span>
          </div>
        </>
      )}
      {children}
    </div>
  );
}

function MiniAmp({ size = 28, color = BB_C.acc }) {
  return <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:size, lineHeight:1, color, display:'inline-block', transform:'translateY(-2px)'}}>&amp;</span>;
}

// ─────────────────────────────────────────────────────────────
// THE 9 POSTS — designed so the feed reads as one big composition
// when seen as a 3x3 grid on a profile, while each one stands alone.
//
// Concept: a 3x3 puzzle where together the words spell out the
// campaign manifesto. Reading bottom-to-top, right-to-left
// (the order IG actually renders newest in the top-left).
//
// Layout (in upload order — last uploaded shows TOP LEFT):
//   Row 1 (top, newest):   01  02  03
//   Row 2 (middle):        04  05  06
//   Row 3 (bottom, oldest):07  08  09
//
// When read as a grid:
//
//   ┌─────────┬─────────┬─────────┐
//   │ Si tu   │ negocio │ no está │
//   ├─────────┼─────────┼─────────┤
//   │   en    │   &     │internet,│
//   ├─────────┼─────────┼─────────┤
//   │  no     │ existe. │  *      │
//   └─────────┴─────────┴─────────┘
//
// The 5 center post is the ampersand mark itself. The asterisk
// (post 9) carries the footnote.
// ─────────────────────────────────────────────────────────────

function makeBigWordPost({ word, italic, color = BB_C.ink, bg = BB_C.bone, fontSize = 320, align='center' }) {
  return (
    <div style={{
      position:'absolute', inset:0, display:'flex',
      alignItems: align==='top' ? 'flex-start' : align==='bottom' ? 'flex-end' : 'center',
      justifyContent:'center', padding: align==='top'? '180px 60px 60px' : align==='bottom'? '60px 60px 180px' : '60px',
      textAlign:'center',
    }}>
      <div style={{
        fontFamily: italic ? BB_FONTS.serif : BB_FONTS.display,
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: italic ? 400 : 600,
        fontSize, lineHeight:.88, letterSpacing:'-.04em', color,
      }}>{word}</div>
    </div>
  );
}

// 01 — "Si tu"
function Post01() {
  return (
    <PostFrame n="01/09" bg={BB_C.bone} fg={BB_C.ink}>
      {makeBigWordPost({ word:'Si tu', fontSize:380 })}
      <div style={{position:'absolute', left:48, top:120, fontFamily:BB_FONTS.mono, fontSize:20, letterSpacing:'.2em', color:BB_C.acc}}>↳ CAMPAÑA 01</div>
    </PostFrame>
  );
}
// 02 — "negocio"
function Post02() {
  return (
    <PostFrame n="02/09" bg={BB_C.ink} fg={BB_C.bone}>
      {makeBigWordPost({ word:'negocio', color:BB_C.bone, fontSize:280 })}
    </PostFrame>
  );
}
// 03 — "no está"
function Post03() {
  return (
    <PostFrame n="03/09" bg={BB_C.bone} fg={BB_C.ink}>
      {makeBigWordPost({ word:'no está', fontSize:300 })}
      <svg viewBox="0 0 1080 1080" style={{position:'absolute', inset:0, pointerEvents:'none'}}>
        <line x1="100" y1="540" x2="980" y2="540" stroke={BB_C.acc} strokeWidth="6"/>
      </svg>
    </PostFrame>
  );
}
// 04 — "en"
function Post04() {
  return (
    <PostFrame n="04/09" bg={BB_C.bone2} fg={BB_C.ink}>
      {makeBigWordPost({ word:'en', fontSize:520 })}
    </PostFrame>
  );
}
// 05 — Center · the LOGO mark monumentally
function Post05() {
  return (
    <PostFrame n="05/09" bg={BB_C.acc} fg={BB_C.bone}>
      <svg viewBox="0 0 1080 1080" style={{position:'absolute',inset:0, pointerEvents:'none'}}>
        <circle cx="540" cy="540" r="410" fill="none" stroke={BB_C.bone} strokeWidth="3" strokeDasharray="6 8" opacity=".45"/>
        <circle cx="540" cy="540" r="330" fill={BB_C.bone}/>
      </svg>
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <BBLogo variant="mark-ink" style={{height:380, width:'auto'}}/>
      </div>
      <div style={{position:'absolute', bottom:170, left:0, right:0, textAlign:'center', fontFamily:BB_FONTS.mono, fontSize:18, letterSpacing:'.32em', color:BB_C.bone}}>
        BRITOS &amp; BERÓN · GESTIÓN Y DESARROLLO DIGITAL
      </div>
    </PostFrame>
  );
}
// 06 — "internet,"
function Post06() {
  return (
    <PostFrame n="06/09" bg={BB_C.bone} fg={BB_C.ink}>
      {makeBigWordPost({ word:'internet,', fontSize:230 })}
    </PostFrame>
  );
}
// 07 — "no"
function Post07() {
  return (
    <PostFrame n="07/09" bg={BB_C.bone2} fg={BB_C.ink}>
      {makeBigWordPost({ word:'no', fontSize:540 })}
    </PostFrame>
  );
}
// 08 — "existe."
function Post08() {
  return (
    <PostFrame n="08/09" bg={BB_C.ink} fg={BB_C.acc}>
      {makeBigWordPost({ word:'existe.', italic:true, color:BB_C.acc, fontSize:340 })}
    </PostFrame>
  );
}
// 09 — Asterisk + footnote
function Post09() {
  return (
    <PostFrame n="09/09" bg={BB_C.bone} fg={BB_C.ink}>
      <div style={{position:'absolute', top:140, left:60, right:60, display:'flex', justifyContent:'center'}}>
        <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:560, lineHeight:.7, color:BB_C.acc}}>*</span>
      </div>
      <div style={{position:'absolute', bottom:200, left:80, right:80, textAlign:'center'}}>
        <div style={{fontFamily:BB_FONTS.display, fontWeight:600, fontSize:64, lineHeight:1.05, letterSpacing:'-.025em'}}>
          Existe.<br/>Pero <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400}}>nadie</span> lo encuentra.
        </div>
        <div style={{marginTop:30, fontFamily:BB_FONTS.mono, fontSize:18, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.acc}}>
          ↳ Hablemos · DM o WhatsApp
        </div>
      </div>
    </PostFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// 9-FEED MOCKUP (renders the actual IG profile look)
// ─────────────────────────────────────────────────────────────
function IGFeedMock() {
  const W = 1080;
  // Wrapper draws an IG-profile-like header + the 9 thumbs in correct order
  const thumb = (Comp) => (
    <div style={{position:'relative', width:'100%', aspectRatio:'1/1', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, transform:'scale(.32)', transformOrigin:'top left',
        width:1080, height:1080}}>
        <Comp/>
      </div>
    </div>
  );
  // In IG newest is top-left. Our reading order 1..9 left-to-right top-to-bottom.
  const cells = [Post01,Post02,Post03,Post04,Post05,Post06,Post07,Post08,Post09];
  return (
    <div style={{width:W, background:BB_C.bone, padding:'40px 32px 60px', fontFamily:BB_FONTS.display}}>
      {/* Profile header */}
      <div style={{display:'grid', gridTemplateColumns:'180px 1fr', gap:36, alignItems:'center', paddingBottom:32, borderBottom:`1px solid ${BB_C.ink}22`}}>
        <div style={{width:160, height:160, borderRadius:'50%', background:BB_C.bone, color:BB_C.acc,
          display:'flex', alignItems:'center', justifyContent:'center', border:`3px solid ${BB_C.acc}`, overflow:'hidden'}}>
          <BBLogo variant="full" style={{width:160, height:160, objectFit:'cover'}} />
        </div>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:6}}>
            <div style={{fontFamily:BB_FONTS.display, fontSize:32, fontWeight:500}}>britosberon</div>
            <span style={{background:BB_C.acc, color:BB_C.bone, padding:'4px 12px', fontSize:14, fontFamily:BB_FONTS.mono, letterSpacing:'.15em'}}>SEGUIR</span>
          </div>
          <div style={{display:'flex', gap:28, marginBottom:14, fontSize:18}}>
            <span><b style={{fontWeight:700}}>247</b> publicaciones</span>
            <span><b style={{fontWeight:700}}>4.812</b> seguidores</span>
            <span><b style={{fontWeight:700}}>312</b> seguidos</span>
          </div>
          <div style={{fontSize:17, lineHeight:1.45, maxWidth:540}}>
            <b>Britos &amp; Berón</b> · Gestión y Desarrollo Digital<br/>
            Hacemos webs <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc}}>que venden</span>, no que adornan ⤳<br/>
            <span style={{color:BB_C.acc}}>britosberon.com.ar</span>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{display:'flex', justifyContent:'center', gap:60, padding:'24px 0', borderBottom:`2px solid ${BB_C.ink}`, fontFamily:BB_FONTS.mono, fontSize:13, letterSpacing:'.2em', textTransform:'uppercase'}}>
        <span>▦ Publicaciones</span>
        <span style={{color:BB_C.mute}}>▶ Reels</span>
        <span style={{color:BB_C.mute}}>◍ Etiquetadas</span>
      </div>
      {/* 9 grid */}
      <div style={{marginTop:6, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:4}}>
        {cells.map((C, i) => <div key={i}>{thumb(C)}</div>)}
      </div>
      <div style={{marginTop:18, fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.2em', color:BB_C.mute, textTransform:'uppercase'}}>
        ↳ La grilla cuenta una sola historia. Cada post se sostiene solo.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// STORIES (1080x1920 each)
// ─────────────────────────────────────────────────────────────
function StoryFrame({ children, bg = BB_C.bone, fg = BB_C.ink }) {
  return (
    <div style={{width:STORY_W, height:STORY_H, background:bg, color:fg, position:'relative', overflow:'hidden', fontFamily:BB_FONTS.display}}>
      {/* progress bars */}
      <div style={{position:'absolute', top:50, left:48, right:48, display:'flex', gap:6}}>
        {[1,1,1,.4,0].map((v,i) => (
          <div key={i} style={{flex:1, height:6, background:`${fg}30`, borderRadius:3}}>
            <div style={{width:`${v*100}%`, height:'100%', background:fg, borderRadius:3}}/>
          </div>
        ))}
      </div>
      {/* avatar */}
      <div style={{position:'absolute', top:90, left:48, display:'flex', alignItems:'center', gap:14}}>
        <div style={{width:60, height:60, borderRadius:'50%', background:bg, color:bg, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', border:`2px solid ${BB_C.acc}`}}>
          <BBLogo variant="full" style={{width:60, height:60, objectFit:'cover'}}/>
        </div>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:24, letterSpacing:'.16em'}}>
          <div style={{fontFamily:BB_FONTS.display, fontWeight:600, fontSize:30, letterSpacing:'-.01em', lineHeight:1}}>britosberon</div>
          <div style={{fontSize:18, color:`${fg}88`, marginTop:6}}>hace 2 h</div>
        </div>
      </div>
      {children}
    </div>
  );
}
function Story01() {
  return (
    <StoryFrame bg={BB_C.bone} fg={BB_C.ink}>
      <div style={{position:'absolute', top:300, left:80, right:80}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:24, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.acc, marginBottom:30}}>
          ↳ Esta semana
        </div>
        <h2 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:160, lineHeight:.92, letterSpacing:'-.04em'}}>
          Lanzamos<br/>
          <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontWeight:400, color:BB_C.acc}}>Kiosko Paula</span><br/>
          a internet.
        </h2>
      </div>
      <div style={{position:'absolute', bottom:340, left:80, right:80, height:760, background:BB_C.ink, padding:30,
        display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <svg viewBox="0 0 920 700" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', opacity:.08}}>
          <rect width="920" height="700" fill="url(#bb-stripes)" style={{color:BB_C.bone}}/>
        </svg>
        <div style={{position:'relative', color:BB_C.bone, fontFamily:BB_FONTS.mono, fontSize:18, letterSpacing:'.22em', textTransform:'uppercase'}}>
          IMG / 04 — captura<br/>kioskopaula.com.ar
        </div>
        <div style={{position:'relative', color:BB_C.bone, fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:90, lineHeight:1}}>
          “gracias<br/>chicos”
        </div>
      </div>
      <div style={{position:'absolute', bottom:80, left:0, right:0, textAlign:'center',
        fontFamily:BB_FONTS.mono, fontSize:26, letterSpacing:'.22em', textTransform:'uppercase'}}>
        ⬆ desliza para verlo
      </div>
    </StoryFrame>
  );
}
function Story02() {
  return (
    <StoryFrame bg={BB_C.acc} fg={BB_C.bone}>
      <div style={{position:'absolute', top:600, left:0, right:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <BBLogo variant="mark-ink" style={{height:540, width:'auto'}}/>
      </div>
      <div style={{position:'absolute', top:300, left:80, right:80}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:24, letterSpacing:'.22em', color:BB_C.ink}}>↳ 03 — ARGUMENTO</div>
      </div>
      <div style={{position:'absolute', bottom:280, left:80, right:80, textAlign:'left'}}>
        <h2 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:120, lineHeight:.95, letterSpacing:'-.04em', color:BB_C.bone}}>
          La ‘y’<br/>que une<br/>tu negocio<br/>con el mundo.
        </h2>
      </div>
      <div style={{position:'absolute', bottom:80, left:80, right:80, padding:'20px 26px', background:BB_C.ink, color:BB_C.bone,
        fontFamily:BB_FONTS.mono, fontSize:26, letterSpacing:'.18em', textTransform:'uppercase', textAlign:'center'}}>
        toca para hablar →
      </div>
    </StoryFrame>
  );
}
function Story03() {
  return (
    <StoryFrame bg={BB_C.ink} fg={BB_C.bone}>
      <div style={{position:'absolute', top:300, left:80, right:80}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:24, letterSpacing:'.22em', color:BB_C.acc, marginBottom:24}}>↳ Q&amp;A</div>
        <h2 style={{margin:0, fontFamily:BB_FONTS.serif, fontStyle:'italic', fontWeight:400, fontSize:130, lineHeight:1.02, color:BB_C.bone}}>
          ¿Cuánto<br/>cuesta una<br/>web con<br/>ustedes?
        </h2>
      </div>
      <div style={{position:'absolute', bottom:300, left:80, right:80,
        background:BB_C.bone, color:BB_C.ink, padding:'34px 30px',
        fontFamily:BB_FONTS.display, fontSize:42, lineHeight:1.3, letterSpacing:'-.015em'}}>
        Mensualidad accesible.<br/>
        Sin pago grande<br/>de entrada.<br/>
        <span style={{fontFamily:BB_FONTS.mono, fontSize:22, letterSpacing:'.2em', textTransform:'uppercase', color:BB_C.acc, display:'block', marginTop:24}}>
          ↳ Te cotizamos en 24 h
        </span>
      </div>
      <div style={{position:'absolute', bottom:80, left:80, right:80, textAlign:'center',
        fontFamily:BB_FONTS.mono, fontSize:26, letterSpacing:'.22em', textTransform:'uppercase', color:`${BB_C.bone}aa`}}>
        ✉ DM para más
      </div>
    </StoryFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// CAROUSEL — 5 slides (1080×1350 each, IG 4:5)
// ─────────────────────────────────────────────────────────────
const CAR_W = 1080;
const CAR_H = 1350;
function CarFrame({ children, bg = BB_C.bone, fg = BB_C.ink, n }) {
  return (
    <div style={{width:CAR_W, height:CAR_H, background:bg, color:fg, position:'relative', overflow:'hidden', fontFamily:BB_FONTS.display}}>
      <div style={{position:'absolute', top:40, left:60, right:60, display:'flex', justifyContent:'space-between',
        fontFamily:BB_FONTS.mono, fontSize:22, letterSpacing:'.22em', textTransform:'uppercase', opacity:.7}}>
        <span>B&amp;B / 5 razones para tener una buena web</span>
        <span>{n} / 05</span>
      </div>
      <div style={{position:'absolute', bottom:40, left:60, right:60, display:'flex', justifyContent:'space-between',
        fontFamily:BB_FONTS.mono, fontSize:18, letterSpacing:'.2em', textTransform:'uppercase', opacity:.5}}>
        <span>↳ desliza</span>
        <span>britosberon.com.ar</span>
      </div>
      {children}
    </div>
  );
}
function Car1() {
  return (
    <CarFrame n="01" bg={BB_C.bone} fg={BB_C.ink}>
      <div style={{position:'absolute', inset:'180px 80px 180px'}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:22, letterSpacing:'.2em', color:BB_C.acc, marginBottom:20}}>↳ PORTADA</div>
        <h2 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:170, lineHeight:.92, letterSpacing:'-.04em'}}>
          5 razones<br/>para no<br/>tener una<br/><span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400}}>web fea</span>.
        </h2>
      </div>
    </CarFrame>
  );
}
function CarN({ n, title, body, bg=BB_C.bone, fg=BB_C.ink }) {
  return (
    <CarFrame n={String(n+1).padStart(2,'0')} bg={bg} fg={fg}>
      <div style={{position:'absolute', top:200, left:80, right:80}}>
        <div style={{fontFamily:BB_FONTS.display, fontWeight:700, fontSize:340, lineHeight:.85, letterSpacing:'-.06em', color:BB_C.acc}}>
          {String(n+1).padStart(2,'0')}
        </div>
      </div>
      <div style={{position:'absolute', bottom:220, left:80, right:80}}>
        <h3 style={{margin:'0 0 24px', fontFamily:BB_FONTS.serif, fontStyle:'italic', fontWeight:400, fontSize:100, lineHeight:1, color:fg}}>
          {title}
        </h3>
        <p style={{margin:0, fontFamily:BB_FONTS.display, fontSize:34, lineHeight:1.35, color:fg, maxWidth:880}}>
          {body}
        </p>
      </div>
    </CarFrame>
  );
}
function Car5() {
  return (
    <CarFrame n="05" bg={BB_C.acc} fg={BB_C.bone}>
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <BBLogo variant="mark-ink" style={{height:560, width:'auto', opacity:.96}}/>
      </div>
      <div style={{position:'absolute', bottom:260, left:80, right:80, textAlign:'left'}}>
        <h2 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:130, lineHeight:.95, letterSpacing:'-.04em'}}>
          ¿Hablamos?
        </h2>
        <p style={{margin:'24px 0 0', fontFamily:BB_FONTS.display, fontSize:32, lineHeight:1.3, color:BB_C.bone, maxWidth:760}}>
          DM acá o WhatsApp. Charlemos 30 minutos sin compromiso. Te decimos si podemos ayudarte.
        </p>
      </div>
    </CarFrame>
  );
}
function IGCarouselBoard() {
  const cars = [
    <Car1 key="1"/>,
    <CarN key="2" n={1} title="Que no parezca de 2012." body="Una web que se ve hecha por alguien que sabe pesa más que mil flyers. Inspirá confianza desde el segundo cero." />,
    <CarN key="3" n={2} title="Para vender, no decorar." body="Cada elemento empuja al cliente al WhatsApp, al carrito o a la reserva. Sin distracciones, sin ruido." bg={BB_C.ink} fg={BB_C.bone}/>,
    <CarN key="4" n={3} title="Móvil, primero." body="8 de cada 10 clientes te van a buscar desde el celu. Si no se ve bien ahí, no se ve bien en ningún lado." />,
    <Car5 key="5"/>,
  ];
  return (
    <div style={{padding:60, background:BB_C.bone2, width: (CAR_W*5)/3 + 60*4 + 120, overflow:'visible'}}>
      <div style={{display:'flex', gap:60}}>
        {cars.map((c,i) => (
          <div key={i} style={{width: CAR_W/3, height: CAR_H/3, transform:'scale(.333)', transformOrigin:'top left', position:'relative'}}>
            <div style={{width:CAR_W, height:CAR_H}}>{c}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:40, fontFamily:BB_FONTS.mono, fontSize:18, letterSpacing:'.2em', color:BB_C.mute, textTransform:'uppercase'}}>
        ↳ Carrusel ancla · 5 slides · formato 4:5 (1080 × 1350)
      </div>
    </div>
  );
}

Object.assign(window, {
  Post01, Post02, Post03, Post04, Post05, Post06, Post07, Post08, Post09,
  IGFeedMock, Story01, Story02, Story03, IGCarouselBoard,
  IGSIZE, STORY_W, STORY_H, CAR_W, CAR_H,
});
