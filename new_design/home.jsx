// home.jsx — Long-form home redesign artboard
// Editorial / brutalist-soft. Bone + Ink + Vermilion accent.

const HOME_W = 1440;

function Home() {
  return (
    <div className="bb" style={{
      width: HOME_W,
      background: BB_C.bone,
      color: BB_C.ink,
      fontFamily: BB_FONTS.display,
      position:'relative',
      overflow:'hidden',
    }}>
      <HomeMarquee />
      <HomeNav />
      <HomeHero />
      <HomeIndex />
      <HomeProcess />
      <HomeManifesto />
      <HomeIncluye />
      <HomeFaq />
      <HomeCTA />
      <HomeFooter />
    </div>
  );
}

// ─── 0 · KINETIC MARQUEE TOP ─────────────────────────────────
function HomeMarquee() {
  const items = [
    'GESTIÓN Y DESARROLLO DIGITAL', 'BUENOS AIRES', 'EST. MMXXV',
    'WEBS · TURNOS · ECOMMERCE · IA',
    'TORNEOS AMATEUR DE FÚTBOL', '4°36′S 58°22′W',
    'WHATSAPP +54 9 11 0000 0000',
  ];
  const Row = ({rev}) => (
    <div className={`bb-mq-track ${rev?'rev':''}`}>
      {Array.from({length:6}).flatMap((_,k) => items.map((t,i) => (
        <span key={`${k}-${i}`} style={{display:'inline-flex',alignItems:'center',gap:48}}>
          {t}
          <span style={{fontFamily:BB_FONTS.serif,fontStyle:'italic',fontSize:22,color:BB_C.acc,lineHeight:1,transform:'translateY(-2px)'}}>&amp;</span>
        </span>
      )))}
    </div>
  );
  return (
    <div style={{
      background:BB_C.ink, color:BB_C.bone, overflow:'hidden',
      borderBottom:`1px solid ${BB_C.ink2}`,
      fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.18em',
      padding:'10px 0', textTransform:'uppercase',
    }}>
      <Row />
    </div>
  );
}

// ─── 1 · NAV ─────────────────────────────────────────────────
function HomeNav() {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'22px 56px', borderBottom:`1px solid ${BB_C.ink}1A`,
      background:BB_C.bone, position:'relative', zIndex:2,
    }}>
      <div style={{display:'flex', alignItems:'center', gap:18}}>
        <BBLogo variant="mark-ink" height={52} />
        <div style={{borderLeft:`1px solid ${BB_C.ink}22`, paddingLeft:18,
          fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', lineHeight:1.7, color:BB_C.ink}}>
          BRITOS &amp; BERÓN<br/>
          <span style={{color:BB_C.mute}}>Gestión y Desarrollo Digital</span>
        </div>
      </div>
      <nav style={{display:'flex', gap:36, fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase'}}>
        <span><sup style={{color:BB_C.acc, marginRight:6}}>01</sup>Comercios</span>
        <span><sup style={{color:BB_C.acc, marginRight:6}}>02</sup>Deportes</span>
        <span><sup style={{color:BB_C.acc, marginRight:6}}>03</sup>Belleza</span>
        <span><sup style={{color:BB_C.acc, marginRight:6}}>04</sup>Proceso</span>
        <span><sup style={{color:BB_C.acc, marginRight:6}}>05</sup>Sobre</span>
      </nav>
      <a style={{
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

// ─── 2 · HERO ────────────────────────────────────────────────
function HomeHero() {
  return (
    <section style={{position:'relative', padding:'80px 56px 100px', borderBottom:`1px solid ${BB_C.ink}1A`}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 280px', gap:64, alignItems:'start'}}>
        <div>
          <div style={{
            display:'flex', alignItems:'center', gap:12,
            fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.2em', textTransform:'uppercase',
            color:BB_C.mute, marginBottom:32,
          }}>
            <span style={{display:'inline-block', width:36, height:1, background:BB_C.ink}}/>
            <span>01 — Manifiesto</span>
            <span style={{flex:1, height:1, background:`${BB_C.ink}22`, margin:'0 12px'}}/>
            <span>↓ scroll</span>
          </div>
          <h1 style={{
            margin:0,
            fontFamily:BB_FONTS.display, fontWeight:600,
            fontSize:188, lineHeight:.88, letterSpacing:'-.045em',
          }}>
            Si tu negocio<br/>
            no está en<br/>
            internet,<br/>
            <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontWeight:400, color:BB_C.acc}}>no existe.</span>
            <sup style={{fontSize:42, color:BB_C.acc, fontFamily:BB_FONTS.serif, fontStyle:'italic', verticalAlign:'super'}}>*</sup>
          </h1>
          <div style={{marginTop:42, display:'flex', gap:20, alignItems:'center'}}>
            <a style={{
              background:BB_C.acc, color:BB_C.bone,
              padding:'20px 28px', fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.2em', textTransform:'uppercase',
              display:'inline-flex', alignItems:'center', gap:14, textDecoration:'none', position:'relative',
            }}>
              Hablemos por WhatsApp
              <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:24, lineHeight:1, transform:'translateY(-2px)'}}>→</span>
            </a>
            <a style={{
              padding:'20px 24px', fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.2em', textTransform:'uppercase',
              border:`1px solid ${BB_C.ink}`, color:BB_C.ink, textDecoration:'none',
            }}>Ver los 3 caminos ↓</a>
          </div>
        </div>

        {/* Right meta column */}
        <div style={{paddingTop:60, borderLeft:`1px solid ${BB_C.ink}22`, paddingLeft:30}}>
          <Meta k="01" l="Estudio fundado" v="Marzo 2025 · Bs. As." />
          <Meta k="02" l="Fundadores" v="Marcos Britos & Belén Berón" />
          <Meta k="03" l="Mensualidad" v="Sin inversión grande" />
          <Meta k="04" l="Entrega" v="7 a 14 días corridos" />
          <Meta k="05" l="Soporte" v="WhatsApp · ≤ 24 hs" />
          {/* Image placeholder honest */}
          <div style={{marginTop:30, aspectRatio:'1/1.2', background:BB_C.ink, color:BB_C.bone, padding:18,
            display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative', overflow:'hidden'}}>
            <svg viewBox="0 0 240 290" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
              <rect width="240" height="290" fill={BB_C.ink2}/>
              <rect width="240" height="290" fill="url(#bb-stripes)" style={{color:BB_C.bone, opacity:.06}}/>
            </svg>
            <div style={{position:'relative', fontFamily:BB_FONTS.mono, fontSize:9, letterSpacing:'.2em', textTransform:'uppercase', opacity:.7}}>
              IMG / 01<br/>retrato fundadores
            </div>
            <div style={{position:'relative', fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:32, lineHeight:1.05, color:BB_C.bone}}>
              “Marcos<br/>&amp; Belén”
            </div>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div style={{
        marginTop:60, paddingTop:22, borderTop:`1px solid ${BB_C.ink}22`,
        display:'flex', justifyContent:'space-between', alignItems:'baseline',
        fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.1em', color:BB_C.mute,
      }}>
        <div><span style={{color:BB_C.acc}}>*</span> Existe. Pero nadie lo encuentra. Y los que no se encuentran no se compran.</div>
        <div style={{fontVariantNumeric:'tabular-nums'}}>pág. 01 / 09</div>
      </div>
    </section>
  );
}
function Meta({ k, l, v }) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'24px 1fr', gap:10, padding:'12px 0', borderBottom:`1px solid ${BB_C.ink}15`}}>
      <span style={{fontFamily:BB_FONTS.mono, fontSize:10, color:BB_C.acc, letterSpacing:'.1em'}}>{k}</span>
      <div>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:10, color:BB_C.mute, letterSpacing:'.18em', textTransform:'uppercase'}}>{l}</div>
        <div style={{fontFamily:BB_FONTS.display, fontSize:14, lineHeight:1.35, marginTop:2}}>{v}</div>
      </div>
    </div>
  );
}

// ─── 3 · INDEX — Las 3 verticales como índice de revista ─────
function HomeIndex() {
  const items = [
    { n:'01', title:'Comercio', kicker:'Vidrieras digitales', body:'Web profesional, sistema de turnos, bot de WhatsApp para comercios, profesionales y servicios.', tags:['WEB','TURNOS','BOT'] },
    { n:'02', title:'Deportes', kicker:'Torneos amateur de fútbol', body:'Gestión integral de torneos y ligas amateur, reservas de canchas, fixtures, tablas y app para jugadores. Para predios, organizadores y clubes.', tags:['TORNEOS','FIXTURES','APP'] },
    { n:'03', title:'Belleza',  kicker:'Salones que enamoran', body:'Portfolio digital, turnos 24/7, recordatorios automáticos. Para peluquerías, spa, manicura y barberías.', tags:['BOOK','24/7','SMS'] },
  ];
  return (
    <section style={{padding:'120px 56px 100px', position:'relative'}}>
      <SectionHead nro="02" t="Índice" sub="Tres caminos. Una sola obsesión: que tu negocio venda más." />
      <div style={{marginTop:60, borderTop:`1.5px solid ${BB_C.ink}`}}>
        {items.map((it,i) => (
          <article key={it.n} style={{
            display:'grid', gridTemplateColumns:'80px 1.3fr 1.5fr 280px',
            gap:32, alignItems:'center', padding:'40px 0',
            borderBottom:`1.5px solid ${BB_C.ink}`,
            position:'relative',
          }}>
            <div style={{fontFamily:BB_FONTS.mono, fontSize:13, letterSpacing:'.15em', color:BB_C.acc, alignSelf:'start', paddingTop:8}}>{it.n}</div>
            <div>
              <div style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.mute, marginBottom:10}}>{it.kicker}</div>
              <h3 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:96, lineHeight:.95, letterSpacing:'-.04em'}}>
                {it.title}<span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400, fontSize:96}}>.</span>
              </h3>
            </div>
            <p style={{margin:0, fontFamily:BB_FONTS.display, fontSize:17, lineHeight:1.45, color:BB_C.ink, maxWidth:480}}>
              {it.body}
              <span style={{display:'block', marginTop:14, fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.18em', color:BB_C.mute, textTransform:'uppercase'}}>
                {it.tags.map((t,j) => <span key={t}>{t}{j<it.tags.length-1 && <span style={{margin:'0 8px', color:BB_C.acc}}>×</span>}</span>)}
              </span>
            </p>
            {/* Image card */}
            <div style={{aspectRatio:'1/1', background: i===0?BB_C.ink:i===1?BB_C.acc:BB_C.bone2, position:'relative', overflow:'hidden'}}>
              <svg viewBox="0 0 280 280" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
                <rect width="280" height="280" fill={i===0?BB_C.ink:i===1?BB_C.acc:BB_C.bone2}/>
                <g style={{color: i===2? BB_C.ink : BB_C.bone, opacity: i===1? 1 : .15}}>
                  {i===1 ? (
                    <g fill="none" stroke={BB_C.bone} strokeWidth="1.4" opacity=".7">
                      {/* football pitch */}
                      <rect x="20" y="40" width="240" height="200" />
                      <line x1="140" y1="40" x2="140" y2="240" />
                      <circle cx="140" cy="140" r="32" />
                      <circle cx="140" cy="140" r="2" fill={BB_C.bone}/>
                      <rect x="20" y="90" width="36" height="100" />
                      <rect x="224" y="90" width="36" height="100" />
                      <rect x="20" y="115" width="14" height="50" />
                      <rect x="246" y="115" width="14" height="50" />
                      <path d="M56,108 a 32,32 0 0 1 0,64" />
                      <path d="M224,108 a 32,32 0 0 0 0,64" />
                      {/* tournament bracket overlay top-right */}
                      <g opacity=".55" stroke={BB_C.bone} strokeWidth="1">
                        <path d="M178,16 h 22 v 8 M178,32 h 22 v -8 M200,20 h 18 v 8 M222,16 h 22 v 8 M222,32 h 22 v -8 M244,20 h 18 v 8" />
                      </g>
                    </g>
                  ) : (
                    <rect width="280" height="280" fill="url(#bb-dots)"/>
                  )}
                </g>
              </svg>
              <div style={{position:'absolute', top:14, left:14, fontFamily:BB_FONTS.mono, fontSize:9, letterSpacing:'.2em', textTransform:'uppercase', color: i===2?BB_C.ink:BB_C.bone, opacity:.85}}>
                {i===0?'IMG / 02 · COMERCIO':i===1?'IMG / 03 · TORNEOS DE FÚTBOL':'IMG / 04 · BELLEZA'}
              </div>
              <div style={{position:'absolute', bottom:14, left:14, right:14, fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:30, lineHeight:1, color: i===2?BB_C.ink:BB_C.bone}}>
                {i===0?'kiosko':i===1?'torneos':'salón'}
              </div>
              <div style={{position:'absolute', top:14, right:14, fontFamily:BB_FONTS.mono, fontSize:10, color: i===2?BB_C.ink:BB_C.bone, opacity:.8}}>
                /{(i+1)*123}.jpg
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ nro, t, sub, dark }) {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:40}}>
      <div>
        <div style={{
          fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.22em', textTransform:'uppercase',
          color: dark? BB_C.acc : BB_C.mute, marginBottom:14,
        }}>{nro} — sección</div>
        <h2 style={{
          margin:0, fontFamily:BB_FONTS.display, fontWeight:600,
          fontSize:120, lineHeight:.9, letterSpacing:'-.045em',
          color: dark? BB_C.bone : BB_C.ink,
        }}>{t}<span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400}}>.</span></h2>
      </div>
      {sub && (
        <p style={{
          maxWidth:380, margin:0,
          fontFamily:BB_FONTS.display, fontSize:18, lineHeight:1.45,
          color: dark? `${BB_C.bone}cc` : BB_C.mute,
        }}>{sub}</p>
      )}
    </div>
  );
}

// ─── 4 · PROCESO ─────────────────────────────────────────────
function HomeProcess() {
  const steps = [
    { n:'01', t:'Charlemos', s:'30 minutos', body:'Sin compromiso. Entendemos tu negocio y qué tenés que resolver. Hablamos como personas, no como agencia.' },
    { n:'02', t:'Diseñamos', s:'48 — 72 horas', body:'Te mostramos el diseño rápido. Iteramos hasta que esté perfecto para vos. Sin templates genéricos, nunca.' },
    { n:'03', t:'Lanzamos', s:'7 — 14 días', body:'Online y funcionando. Después seguimos: actualizaciones, soporte y crecimiento mes a mes.' },
  ];
  return (
    <section style={{padding:'120px 56px 100px', background:BB_C.bone2, borderTop:`1.5px solid ${BB_C.ink}`, borderBottom:`1.5px solid ${BB_C.ink}`}}>
      <SectionHead nro="03" t="Proceso" sub="Mensualidad accesible. Contrato corto. Si no te sirve, te vas. No hay drama." />
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, marginTop:80}}>
        {steps.map((st,i) => (
          <div key={st.n} style={{
            padding:'36px 32px 36px',
            borderLeft: i>0 ? `1px solid ${BB_C.ink}33` : 'none',
            position:'relative',
          }}>
            <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
              <div style={{fontFamily:BB_FONTS.display, fontWeight:700, fontSize:240, lineHeight:.85, letterSpacing:'-.06em', color:BB_C.ink}}>
                {st.n}
              </div>
              <div style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.acc, writingMode:'vertical-rl', transform:'rotate(180deg)'}}>
                {st.s}
              </div>
            </div>
            <h3 style={{margin:'24px 0 12px', fontFamily:BB_FONTS.serif, fontStyle:'italic', fontWeight:400, fontSize:54, lineHeight:1, color:BB_C.acc}}>
              {st.t}
            </h3>
            <p style={{margin:0, fontFamily:BB_FONTS.display, fontSize:15, lineHeight:1.55, color:BB_C.ink, maxWidth:340}}>
              {st.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 5 · MANIFIESTO black full-bleed ────────────────────────
function HomeManifesto() {
  return (
    <section style={{background:BB_C.ink, color:BB_C.bone, padding:'140px 56px 140px', position:'relative', overflow:'hidden'}}>
      <div className="bb-grain dark" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', opacity:.05, color:BB_C.bone}}>
        <rect width="100" height="100" fill="url(#bb-stripes)"/>
      </svg>
      <div style={{position:'relative', display:'grid', gridTemplateColumns:'120px 1fr', gap:48}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:BB_C.acc}}>
          04 — Manifiesto
        </div>
        <div>
          <p style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:500, fontSize:84, lineHeight:1.02, letterSpacing:'-.035em', maxWidth:1100}}>
            Hacemos webs <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.acc, fontWeight:400}}>que venden</span>,
            no que adornan.
          </p>
          <p style={{margin:'48px 0 0', fontFamily:BB_FONTS.display, fontSize:22, lineHeight:1.55, maxWidth:760, color:`${BB_C.bone}cc`}}>
            Para nosotros el diseño no es decoración. Es la diferencia entre que tu cliente te encuentre
            o se vaya con tu competencia. Trabajamos para comercios reales, no para slides de inversores.
            Hablamos castellano, no agencia. <span style={{color:BB_C.acc}}>Y respondemos el WhatsApp.</span>
          </p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, marginTop:80, borderTop:`1px solid ${BB_C.bone}22`}}>
            {[
              ['+24h','tiempo de respuesta'],
              ['7-14','días al aire'],
              ['1:1','trato directo'],
              ['∞','revisiones incluidas'],
            ].map(([n,l],i) => (
              <div key={i} style={{padding:'28px 18px 0', borderLeft: i>0?`1px solid ${BB_C.bone}22`:'none'}}>
                <div style={{fontFamily:BB_FONTS.display, fontWeight:700, fontSize:84, lineHeight:.9, letterSpacing:'-.04em'}}>{n}</div>
                <div style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:`${BB_C.bone}88`, marginTop:10}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6 · INCLUYE ─────────────────────────────────────────────
function HomeIncluye() {
  const rows = [
    ['01','Diseño a medida','Cada proyecto se diseña específicamente para tu marca. Nunca templates.'],
    ['02','Hosting y dominio','Todo incluido. No pagás servidores aparte ni configurás nada.'],
    ['03','SEO desde el día 1','Optimización técnica + Google Business Profile. Aparecés en tu zona.'],
    ['04','Actualizaciones mensuales','Cambios de textos, fotos, precios y servicios. Sin costo extra.'],
    ['05','Backup y seguridad','Copias periódicas. Protegido contra ataques y caídas.'],
    ['06','Soporte por WhatsApp','Te atendemos nosotros. ≤ 24 horas. No call center.'],
  ];
  return (
    <section style={{padding:'120px 56px 100px'}}>
      <SectionHead nro="05" t="Incluye" sub="Lo que entra en la mensualidad. Sin asteriscos chiquitos." />
      <table style={{marginTop:60, width:'100%', borderCollapse:'collapse', borderTop:`1.5px solid ${BB_C.ink}`}}>
        <tbody>
          {rows.map(([n,t,d]) => (
            <tr key={n} style={{borderBottom:`1px solid ${BB_C.ink}22`}}>
              <td style={{padding:'28px 0', fontFamily:BB_FONTS.mono, fontSize:13, letterSpacing:'.15em', color:BB_C.acc, width:80, verticalAlign:'baseline'}}>{n}</td>
              <td style={{padding:'28px 24px 28px 0', fontFamily:BB_FONTS.display, fontWeight:500, fontSize:36, letterSpacing:'-.02em', width:'40%', verticalAlign:'baseline'}}>{t}</td>
              <td style={{padding:'28px 0', fontFamily:BB_FONTS.display, fontSize:16, lineHeight:1.5, color:BB_C.ink, verticalAlign:'baseline'}}>{d}</td>
              <td style={{padding:'28px 0', width:80, textAlign:'right', verticalAlign:'baseline'}}>
                <span style={{display:'inline-block', width:32, height:32, border:`1px solid ${BB_C.ink}`, position:'relative'}}>
                  <span style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', color:BB_C.acc, fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:24, lineHeight:1, transform:'translateY(-2px)'}}>✓</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

// ─── 7 · FAQ ─────────────────────────────────────────────────
function HomeFaq() {
  const faqs = [
    ['¿Cuánto cuesta una página web?','Trabajamos con suscripción mensual, no pago grande de entrada. Cada proyecto se cotiza según lo que necesites.'],
    ['¿Puedo cancelar la suscripción cuando quiera?','Cada producto tiene un mínimo (3, 6 o 12 meses). Cumplido el plazo, cancelás con 30 días de aviso.'],
    ['¿En cuánto tiempo está lista?','Entre 7 y 14 días desde la firma y la entrega de materiales.'],
    ['¿El dominio queda a mi nombre?','Sí. Tu dominio queda a tu nombre/CUIT. Te lo llevás cuando quieras.'],
    ['¿Y si necesito cambios después?','Cambios normales incluidos. Funcionalidades nuevas se cotizan aparte.'],
    ['¿Trabajan en todo el país?','Sí, de forma remota. Presencial solo en GBA cuando hace falta.'],
  ];
  return (
    <section style={{padding:'120px 56px 100px', background:BB_C.bone2, borderTop:`1.5px solid ${BB_C.ink}`}}>
      <SectionHead nro="06" t="Dudas" sub="Las que nos hacen siempre. Respondidas sin vueltas." />
      <div style={{marginTop:60, columnCount:2, columnGap:48}}>
        {faqs.map(([q,a],i) => (
          <div key={i} style={{breakInside:'avoid', marginBottom:34, borderTop:`1px solid ${BB_C.ink}`, paddingTop:18}}>
            <div style={{display:'flex', alignItems:'baseline', gap:14, marginBottom:10}}>
              <span style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.2em', color:BB_C.acc}}>Q.0{i+1}</span>
              <h4 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:22, letterSpacing:'-.015em', lineHeight:1.2}}>{q}</h4>
            </div>
            <p style={{margin:'0 0 0 50px', fontFamily:BB_FONTS.display, fontSize:14, lineHeight:1.55, color:BB_C.mute}}>
              <span style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.2em', color:BB_C.ink, marginRight:8}}>A.</span>
              {a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 8 · CTA FINAL ───────────────────────────────────────────
function HomeCTA() {
  return (
    <section style={{background:BB_C.acc, color:BB_C.bone, padding:'120px 56px 100px', position:'relative', overflow:'hidden'}}>
      <div className="bb-grain dark" />
      {/* monumental logo as background */}
      <div style={{position:'absolute', top:-40, right:-120, width:780, height:780, pointerEvents:'none', opacity:.95, mixBlendMode:'multiply'}}>
        <BBLogo variant="mark-ink" style={{height:780, width:'auto', filter:'opacity(.4)'}} />
      </div>
      <div style={{position:'relative', maxWidth:880}}>
        <div style={{fontFamily:BB_FONTS.mono, fontSize:12, letterSpacing:'.22em', textTransform:'uppercase', opacity:.85, marginBottom:24}}>
          07 — Empezá ahora
        </div>
        <h2 style={{margin:0, fontFamily:BB_FONTS.display, fontWeight:600, fontSize:140, lineHeight:.92, letterSpacing:'-.04em'}}>
          ¿Listo<br/>
          para <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', color:BB_C.ink, fontWeight:400}}>existir</span><br/>
          en internet?
        </h2>
        <p style={{margin:'42px 0 36px', fontFamily:BB_FONTS.display, fontSize:22, lineHeight:1.45, maxWidth:520}}>
          30 minutos de charla. Sin compromiso. Te decimos si podemos ayudarte y, si no, te recomendamos a alguien que sí.
        </p>
        <div style={{display:'flex', gap:18, alignItems:'center'}}>
          <a style={{
            background:BB_C.ink, color:BB_C.bone, padding:'24px 32px',
            fontFamily:BB_FONTS.mono, fontSize:13, letterSpacing:'.22em', textTransform:'uppercase',
            display:'inline-flex', alignItems:'center', gap:14, textDecoration:'none',
          }}>
            Escribinos por WhatsApp
            <span style={{fontFamily:BB_FONTS.serif, fontStyle:'italic', fontSize:28, transform:'translateY(-2px)'}}>→</span>
          </a>
          <span style={{fontFamily:BB_FONTS.mono, fontSize:11, letterSpacing:'.2em', textTransform:'uppercase'}}>
            o · hola@britosberon.com.ar
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── 9 · FOOTER ──────────────────────────────────────────────
function HomeFooter() {
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
          <div key={t}>
            <div style={{fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:`${BB_C.bone}66`, marginBottom:16}}>{t}</div>
            <ul style={{listStyle:'none', padding:0, margin:0}}>
              {items.map(x => <li key={x} style={{fontFamily:BB_FONTS.display, fontSize:13, lineHeight:1.9, color:BB_C.bone}}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{marginTop:24, display:'flex', justifyContent:'space-between', fontFamily:BB_FONTS.mono, fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:`${BB_C.bone}66`}}>
        <span>© 2025 Britos &amp; Berón · Todos los derechos reservados</span>
        <span>Términos · Privacidad · Cookies</span>
        <span>v1.0 · Build {new Date().getFullYear()}.05.14</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Home, HOME_W });
