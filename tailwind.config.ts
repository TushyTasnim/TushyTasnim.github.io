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
        // Academic-press palette: warm ivory paper, deep navy ink, muted
        // burgundy and slate-blue accents. Every ink/accent token below clears
        // WCAG AA (4.5:1) against the page, card, and tinted-band backgrounds.
        deep: "#faf8f3",
        panel: "#ffffff",
        line: "rgba(22,33,62,0.12)",
        lineStrong: "rgba(22,33,62,0.24)",
        ink: "#16213e",
        muted: "#44506a",
        faint: "#646d85",
        // `copper` and `teal` keep their names so components stay untouched;
        // only the values changed.
        copper: "#8c2f39",
        copperSoft: "rgba(140,47,57,0.09)",
        teal: "#2c4a6e",
        tealSoft: "rgba(44,74,110,0.09)",
        indigo: "#16213e",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
