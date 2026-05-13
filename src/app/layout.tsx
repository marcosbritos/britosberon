import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
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
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
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
        {children}
      </body>
    </html>
  );
}
