// canvas.jsx — Top-level canvas that mounts every artboard.

function App() {
  return (
    <DesignCanvas>
      {/* ─── Hero intro section ─── */}
      <DCSection id="00-intro" title="00 — Britos & Berón · Rebrand & Campaña" subtitle="Sistema de marca + home rediseñada + campaña social. Hacé scroll y zoom.">
        <DCArtboard id="poster" label="A · Póster manifiesto" width={POSTER_W} height={POSTER_H}><PosterManifesto/></DCArtboard>
        <DCArtboard id="ooh"    label="B · Vía pública (OOH)" width={OOH_W} height={OOH_H}><BillboardOOH/></DCArtboard>
      </DCSection>

      {/* ─── Sistema de marca ─── */}
      <DCSection id="01-marca" title="01 — Sistema de marca" subtitle="El ampersand como monograma. Lockup, paleta, tipo y grilla.">
        <DCArtboard id="amp"   label="A · Marca primaria" width={800} height={800}><BoardBrandMark/></DCArtboard>
        <DCArtboard id="lock"  label="B · Lockups" width={1000} height={700}><BoardLockup/></DCArtboard>
        <DCArtboard id="color" label="C · Paleta" width={1000} height={700}><BoardColor/></DCArtboard>
        <DCArtboard id="type"  label="D · Tipografía" width={1100} height={780}><BoardType/></DCArtboard>
        <DCArtboard id="grid"  label="E · Grilla" width={1100} height={700}><BoardGrid/></DCArtboard>
      </DCSection>

      {/* ─── Home redesign ─── */}
      <DCSection id="02-home" title="02 — Home rediseñada" subtitle="Long-form editorial. Hacé click expand para verla a pantalla completa.">
        <DCArtboard id="home" label="britosberon.com.ar · home" width={HOME_W} height={5800}>
          <Home/>
        </DCArtboard>
      </DCSection>

      {/* ─── Instagram feed ─── */}
      <DCSection id="03-ig-feed" title="03 — Instagram · feed de lanzamiento" subtitle="Una sola composición. 9 posts. Una frase que se arma a medida que subís.">
        <DCArtboard id="ig-profile" label="Vista de perfil (mock real)" width={1080} height={1420}>
          <IGFeedMock/>
        </DCArtboard>
      </DCSection>

      {/* ─── Posts individuales ─── */}
      <DCSection id="04-ig-posts" title="04 — Los 9 posts, uno a uno" subtitle="Cada uno se sostiene solo. Orden de subida: 09 → 01 (para que queden 01-09 leyendo de arriba a abajo).">
        <DCArtboard id="p01" label="01 · Si tu"     width={IGSIZE} height={IGSIZE}><Post01/></DCArtboard>
        <DCArtboard id="p02" label="02 · negocio"   width={IGSIZE} height={IGSIZE}><Post02/></DCArtboard>
        <DCArtboard id="p03" label="03 · no está"   width={IGSIZE} height={IGSIZE}><Post03/></DCArtboard>
        <DCArtboard id="p04" label="04 · en"        width={IGSIZE} height={IGSIZE}><Post04/></DCArtboard>
        <DCArtboard id="p05" label="05 · & monograma" width={IGSIZE} height={IGSIZE}><Post05/></DCArtboard>
        <DCArtboard id="p06" label="06 · internet," width={IGSIZE} height={IGSIZE}><Post06/></DCArtboard>
        <DCArtboard id="p07" label="07 · no"        width={IGSIZE} height={IGSIZE}><Post07/></DCArtboard>
        <DCArtboard id="p08" label="08 · existe."   width={IGSIZE} height={IGSIZE}><Post08/></DCArtboard>
        <DCArtboard id="p09" label="09 · asterisco" width={IGSIZE} height={IGSIZE}><Post09/></DCArtboard>
      </DCSection>

      {/* ─── Stories ─── */}
      <DCSection id="05-stories" title="05 — Stories · plantillas" subtitle="3 plantillas que se reciclan: lanzamiento, argumento, Q&A.">
        <DCArtboard id="s1" label="A · Lanzamiento de cliente" width={STORY_W*0.42} height={STORY_H*0.42}>
          <div style={{transform:'scale(0.42)', transformOrigin:'top left'}}><Story01/></div>
        </DCArtboard>
        <DCArtboard id="s2" label="B · Argumento de marca" width={STORY_W*0.42} height={STORY_H*0.42}>
          <div style={{transform:'scale(0.42)', transformOrigin:'top left'}}><Story02/></div>
        </DCArtboard>
        <DCArtboard id="s3" label="C · Q&A / educacional" width={STORY_W*0.42} height={STORY_H*0.42}>
          <div style={{transform:'scale(0.42)', transformOrigin:'top left'}}><Story03/></div>
        </DCArtboard>
      </DCSection>

      {/* ─── Carousel ─── */}
      <DCSection id="06-carousel" title="06 — Carrusel ancla · ‘5 razones’" subtitle="Carrusel pilar de educación. 5 slides 4:5, mismo sistema.">
        <DCArtboard id="car" label="Carrusel completo" width={CAR_W*5/3 + 60*4 + 120} height={CAR_H/3 + 160}>
          <IGCarouselBoard/>
        </DCArtboard>
      </DCSection>

      {/* ─── Merch / aplicaciones ─── */}
      <DCSection id="07-merch" title="07 — Aplicaciones offline" subtitle="Tarjeta personal + sticker pack. Para que la marca también se toque.">
        <DCArtboard id="biz"    label="A · Tarjeta personal (anverso + reverso)" width={1160} height={360}><BizCard/></DCArtboard>
        <DCArtboard id="sticker"label="B · Sticker pack" width={900} height={700}><StickerSheet/></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
