# Patch UX · B&B Britos Berón

Cambios para aplicar sobre `marcosbritos/britosberon@master`. Cada archivo de esta carpeta reemplaza al de tu repo en la misma ruta relativa.

## Cómo aplicar

```bash
# desde la raíz de tu repo
cp -R repo-patch/src/* src/
cp repo-patch/tailwind.config.ts ./
git add -A && git commit -m "ux: header mobile, botones AA, type clamp, WA flotante v2, mockups en landings"
git push origin master
```

## Resumen de cambios

| Archivo | Qué cambia |
|---|---|
| `src/lib/design.ts` | `mute` oscurecido a `#524F47` (AA en bone). Token `acc2` ya disponible para uso text-on-bone. |
| `tailwind.config.ts` | `mute` token actualizado (refleja design.ts). |
| `src/components/FloatingWhatsApp.tsx` | Burbuja ink con ícono verde WhatsApp adentro (opción B). Pulse animado más sutil. |
| `src/components/home/HomeComponents.tsx` | **HomeNav**: sticky + backdrop blur, tagline mobile envuelve correctamente, WhatsApp pill visible en mobile, drawer con hamburguesa < 1024px. **HomeHero**: `clamp()` en H1. Cards del Índice con mockups de producto. |
| `src/components/landings/ComerciosHero.tsx` | `clamp()` en H1, primary CTA ink/bone (AA), min-height 56px. |
| `src/components/landings/DeportesHero.tsx` | Igual + foto contenida en card sin rotación que rompe en mobile. |
| `src/components/landings/BellezaHero.tsx` | Igual. |
| `src/components/landings/TurismoHero.tsx` | Igual + corrección de overflow del meta. |
| `src/components/landings/LandingCTA.tsx` | CTA primaria con min-height 56px, hover claro, ARIA mejorada. |

## Lo que NO cambió

- Paleta editorial (bone/ink/teal/gold).
- Pairing tipográfico (Bricolage Grotesque + Instrument Serif + JetBrains Mono).
- Estructura de información de cada landing.
- SEO metadata, `sitemap`, `robots`, `layout.tsx`.

## Verificación local

```bash
npm run dev
# abrí en chrome con devtools → toggle device toolbar
# probá 320px, 375px, 414px, 768px, 1024px, 1440px
```

Buscá especialmente: header sin overflow en 320–414px, botones primarios alcanzando 56px de alto en mobile, foco visible al tab-navegar.
