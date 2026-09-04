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
        deep: "#0b0c14",
        panel: "#161a2c",
        line: "rgba(255,255,255,0.10)",
        lineStrong: "rgba(255,255,255,0.20)",
        ink: "#f2f1f6",
        muted: "#a3a8ba",
        faint: "#787f92",
        copper: "#f2884b",
        copperSoft: "rgba(242,136,75,0.16)",
        teal: "#e85d8f",
        tealSoft: "rgba(232,93,143,0.16)",
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
