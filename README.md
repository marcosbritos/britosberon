# B&B Britos Berón — Estudio Digital

Sitio web oficial de Britos Berón. Estudio digital especializado en soluciones para negocios chicos en Argentina.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- Deploy en **Vercel**

## Estructura

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── comercios/page.tsx    # B&B Comercio
│   ├── deportes/page.tsx     # B&B Deportes
│   ├── belleza/page.tsx      # B&B Belleza
│   ├── sitemap.ts            # Sitemap dinámico
│   ├── robots.ts             # Robots dinámico
│   ├── not-found.tsx         # Página 404
│   └── layout.tsx            # Root layout + SEO
├── components/
│   ├── home/                 # Componentes de la home
│   ├── landings/             # Componentes de las 3 landings
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── FloatingWhatsApp.tsx
└── lib/
    └── whatsapp.ts           # Helper de WhatsApp
```

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio corre en `http://localhost:3000`.

## Deploy

Automático en Vercel ante cada push a `main`.
