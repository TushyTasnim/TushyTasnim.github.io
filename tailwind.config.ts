import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern-professional palette: cool paper-white canvas, near-black
        // navy ink, and a confident indigo / teal / amber accent triad that
        // rotates section by section so each band reads as its own moment.
        // Every ink and accent token clears WCAG AA (4.5:1) on both the page
        // canvas and the white card surface.
        deep: "#f4f6fb",
        panel: "#ffffff",
        line: "rgba(13,20,36,0.10)",
        lineStrong: "rgba(13,20,36,0.20)",
        ink: "#0d1424",
        muted: "#475069",
        faint: "#646d8a",
        brand: "#4338ca",
        brandDeep: "#312e81",
        brandSoft: "rgba(67,56,202,0.08)",
        teal: "#0f766e",
        tealDeep: "#115e59",
        tealSoft: "rgba(15,118,110,0.08)",
        amber: "#b45309",
        amberDeep: "#92400e",
        amberSoft: "rgba(180,83,9,0.09)",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
