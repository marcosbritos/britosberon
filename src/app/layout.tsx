import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://britosberon.com.ar"),
  title: {
    default: "B&B Britos Berón | Estudio digital · Webs, sistemas y crecimiento",
    template: "%s | B&B Britos Berón",
  },
  description:
    "Estudio digital en Argentina. Construimos webs, sistemas de turnos, ecommerce, plataformas deportivas y presencia digital para comercios, deportes, belleza y turismo. Suscripción mensual accesible.",
  keywords: [
    "estudio digital Argentina",
    "desarrollo web Buenos Aires",
    "sistema de turnos online",
    "ecommerce Argentina",
    "automatización negocios",
    "web mensualidad accesible",
    "agencia web PyME",
    "web para comercios",
    "web para peluquerías",
    "web para barberías",
    "reservas canchas online",
    "plataforma torneos amateur",
    "web para camping",
    "web para hostería",
    "presencia digital turismo",
    "Google Maps reclamado",
    "Britos Berón",
  ],
  authors: [{ name: "Britos Berón" }],
  creator: "Britos Berón",
  publisher: "Britos Berón",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://britosberon.com.ar",
    siteName: "B&B Britos Berón",
    title: "B&B Britos Berón | Estudio digital · Webs, sistemas y crecimiento",
    description:
      "Construimos la presencia digital de tu negocio. Webs, sistemas, reservas, ecommerce y plataformas a medida. Suscripción mensual accesible en Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B&B Britos Berón | Estudio digital",
    description: "Webs, sistemas y crecimiento para negocios en Argentina.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LKuHJHS-1IyGtexZhCFqUzKgZTfZ_hu1r3vF1Mxj2ps",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body suppressHydrationWarning className="font-display text-ink bg-bone-2 antialiased overflow-x-hidden m-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Britos Berón",
              alternateName: ["B&B", "B&B Britos Berón"],
              url: "https://britosberon.com.ar",
              logo: "https://britosberon.com.ar/logo.png",
              description:
                "Estudio digital en Argentina. Webs, sistemas, ecommerce y plataformas para comercios, deportes, belleza y turismo.",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressLocality: "Buenos Aires",
                addressRegion: "Buenos Aires",
              },
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              founder: [
                { "@type": "Person", name: "Marcos Britos" },
                { "@type": "Person", name: "Belén Berón" },
              ],
              knowsAbout: [
                "Desarrollo web",
                "Sistemas de turnos online",
                "Ecommerce",
                "Plataformas deportivas",
                "Presencia digital",
                "SEO local",
                "Automatización con WhatsApp",
              ],
              sameAs: [],
            }),
          }}
        />
        {/* Shared SVG defs (filters, patterns) */}
        <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <filter id="bb-turb" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="3"/>
              <feDisplacementMap in="SourceGraphic" scale="14"/>
            </filter>
            <filter id="bb-turb-soft">
              <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" seed="7"/>
              <feDisplacementMap in="SourceGraphic" scale="8"/>
            </filter>
            <pattern id="bb-stripes" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="14" height="14" fill="transparent"/>
              <rect width="1.4" height="14" fill="currentColor" opacity=".55"/>
            </pattern>
            <pattern id="bb-dots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" opacity=".7"/>
            </pattern>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
