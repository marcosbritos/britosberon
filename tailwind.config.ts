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
        bone: {
          DEFAULT: "#F2EFE6",
          2: "#E8E4D8",
        },
        bone2: "#E8E4D8",
        ink: {
          DEFAULT: "#0A1F2A",
          2: "#142A36",
        },
        ink2: "#142A36",
        // AA sobre bone (4.5:1). Antes era #6B6962 (3.1:1, fallaba).
        mute: "#524F47",
        acc: {
          DEFAULT: "#1FA3B5",
          2: "#0E6B7C",
        },
        acc2: "#0E6B7C",
        gold: "#C9A961",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
