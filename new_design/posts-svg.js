// posts-svg.js — Pure-SVG IG posts. 1080×1080 each.
// {{LOGO_INK}} / {{LOGO_BONE}} / {{LOGO_FULL}} placeholders resolved at render time.

const BB = {
  bone:  '#F2EFE6',
  bone2: '#E8E4D8',
  ink:   '#0A1F2A',
  ink2:  '#142A36',
  acc:   '#1FA3B5',
  acc2:  '#0E6B7C',
  gold:  '#C9A961',
  mute:  '#6B6962',
};

const F = {
  display: "'Bricolage Grotesque', system-ui, sans-serif",
  serif:   "'Instrument Serif', Georgia, serif",
  mono:    "'JetBrains Mono', ui-monospace, monospace",
};

function chrome({ n, fg, logoVar = 'ink' }) {
  const logoSrc = logoVar === 'bone' ? '{{LOGO_BONE}}' : '{{LOGO_INK}}';
  return `
    <image href="${logoSrc}" x="48" y="38" height="50" preserveAspectRatio="xMinYMin meet" opacity=".96"/>
    <text x="1032" y="68" text-anchor="end" font-family="${F.mono}" font-size="20" fill="${fg}" fill-opacity=".75" letter-spacing="4">${n}</text>
    <text x="48"   y="1042" font-family="${F.mono}" font-size="18" fill="${fg}" fill-opacity=".55" letter-spacing="3.4">BRITOSBERON.COM.AR</text>
    <text x="1032" y="1042" text-anchor="end" font-family="${F.mono}" font-size="18" fill="${fg}" fill-opacity=".55" letter-spacing="3.4">@BRITOSBERON</text>
  `;
}

const POSTS = {
  '01': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.bone}"/>
    ${chrome({ n:'01/09', fg:BB.ink, logoVar:'ink' })}
    <text x="48" y="186" font-family="${F.mono}" font-size="20" fill="${BB.acc}" letter-spacing="4">↳ CAMPAÑA 01</text>
    <text x="540" y="620" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="380"
      letter-spacing="-15" fill="${BB.ink}">Si tu</text>
  </svg>`,

  '02': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.ink}"/>
    ${chrome({ n:'02/09', fg:BB.bone, logoVar:'bone' })}
    <text x="540" y="610" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="280"
      letter-spacing="-11" fill="${BB.bone}">negocio</text>
  </svg>`,

  '03': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.bone}"/>
    ${chrome({ n:'03/09', fg:BB.ink, logoVar:'ink' })}
    <line x1="100" y1="540" x2="980" y2="540" stroke="${BB.acc}" stroke-width="6"/>
    <text x="540" y="500" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="300"
      letter-spacing="-12" fill="${BB.ink}">no está</text>
  </svg>`,

  '04': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.bone2}"/>
    ${chrome({ n:'04/09', fg:BB.ink, logoVar:'ink' })}
    <text x="540" y="700" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="520"
      letter-spacing="-21" fill="${BB.ink}">en</text>
  </svg>`,

  // CENTER · monumental brand logo
  '05': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.acc}"/>
    ${chrome({ n:'05/09', fg:BB.bone, logoVar:'bone' })}
    <circle cx="540" cy="540" r="410" fill="none" stroke="${BB.bone}" stroke-width="3" stroke-dasharray="6 8" opacity=".45"/>
    <circle cx="540" cy="540" r="330" fill="${BB.bone}"/>
    <image href="{{LOGO_INK}}" x="220" y="320" width="640" height="440" preserveAspectRatio="xMidYMid meet"/>
    <text x="540" y="970" text-anchor="middle"
      font-family="${F.mono}" font-size="18" letter-spacing="5"
      fill="${BB.bone}">BRITOS &amp; BERÓN · GESTIÓN Y DESARROLLO DIGITAL</text>
  </svg>`,

  '06': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.bone}"/>
    ${chrome({ n:'06/09', fg:BB.ink, logoVar:'ink' })}
    <text x="540" y="600" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="230"
      letter-spacing="-9" fill="${BB.ink}">internet,</text>
  </svg>`,

  '07': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.bone2}"/>
    ${chrome({ n:'07/09', fg:BB.ink, logoVar:'ink' })}
    <text x="540" y="720" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="540"
      letter-spacing="-22" fill="${BB.ink}">no</text>
  </svg>`,

  '08': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.ink}"/>
    ${chrome({ n:'08/09', fg:BB.acc, logoVar:'bone' })}
    <text x="540" y="630" text-anchor="middle"
      font-family="${F.serif}" font-style="italic" font-weight="400"
      font-size="340" fill="${BB.acc}">existe.</text>
  </svg>`,

  '09': () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="${BB.bone}"/>
    ${chrome({ n:'09/09', fg:BB.ink, logoVar:'ink' })}
    <text x="540" y="540" text-anchor="middle"
      font-family="${F.serif}" font-style="italic" font-size="560"
      fill="${BB.acc}">*</text>
    <text x="540" y="780" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="64"
      letter-spacing="-2" fill="${BB.ink}">Existe.</text>
    <text x="540" y="850" text-anchor="middle"
      font-family="${F.display}" font-weight="600" font-size="64"
      letter-spacing="-2" fill="${BB.ink}">Pero <tspan font-family="${F.serif}" font-style="italic" fill="${BB.acc}" font-weight="400">nadie</tspan> lo encuentra.</text>
    <text x="540" y="940" text-anchor="middle"
      font-family="${F.mono}" font-size="18" letter-spacing="4"
      fill="${BB.acc}">↳ HABLEMOS · DM O WHATSAPP</text>
  </svg>`,
};

if (typeof module !== 'undefined') module.exports = { POSTS, BB, F };
