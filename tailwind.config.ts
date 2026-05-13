import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marca principal (oscuro azul)
        ink: {
          900: "#0a1628",
          800: "#0f1f3a",
          700: "#1a2f4f",
        },
        // Acentos violeta/púrpura (home y comercios)
        accent: {
          400: "#a5b4fc",
          500: "#6366f1",
          600: "#4f46e5",
          purple: "#a855f7",
          purpleLight: "#d8b4fe",
        },
        // Dorado suave (comercios)
        gold: {
          DEFAULT: "#fbbf24",
          light: "#fde68a",
        },
        // Verde lima (deportes)
        lime: {
          DEFAULT: "#c9ff3f",
          light: "#d9f99d",
          dark: "#84cc16",
        },
        // Sage (belleza)
        sage: {
          50: "#f5f3ed",
          100: "#e8e4d8",
          400: "#9aab8a",
          500: "#7a8b6a",
          600: "#5d6e4f",
          900: "#2a3528",
        },
        cream: {
          50: "#fbfaf6",
          100: "#f5f3ed",
          200: "#ebe8df",
        },
        whatsapp: "#25d366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
