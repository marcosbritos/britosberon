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
    default: "B&B Britos Berón | Estudio Digital · Soluciones para Negocios en Argentina",
    template: "%s | B&B Britos Berón",
  },
  description:
    "Si tu negocio todavía no está en internet, lo ponemos online. Webs, sistemas de turnos, ecommerce y automatización para comercios, profesionales y emprendedores en Argentina. Suscripción mensual accesible.",
  keywords: [
    "desarrollo web Argentina",
    "sistema de turnos online",
    "ecommerce Buenos Aires",
    "automatización negocios",
    "página web mensualidad",
    "agencia digital Argentina",
    "diseño web Buenos Aires",
    "web para comercios",
    "web para peluquerías",
    "reservas canchas online",
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
    title: "B&B Britos Berón | Soluciones Digitales para Negocios en Argentina",
    description:
      "Si tu negocio todavía no está en internet, lo ponemos online. Suscripción mensual accesible.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B&B Britos Berón | Estudio Digital",
    description: "Soluciones digitales para negocios chicos en Argentina.",
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
      <body className="font-display text-ink bg-bone-2 antialiased overflow-x-hidden m-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Britos Berón",
              alternateName: "B&B",
              url: "https://britosberon.com.ar",
              logo: "https://britosberon.com.ar/logo.png",
              description:
                "Estudio digital. Desarrollo de webs, sistemas de turnos, ecommerce y automatización para negocios en Argentina.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressLocality: "Buenos Aires",
              },
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
