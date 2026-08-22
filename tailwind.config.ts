import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B2540",
        base: "#F7FAFC",
        panel: "#EEF3F8",
        teal: {
          50: "#E3EEF7",
          100: "#C9DCEC",
          300: "#4A8FC2",
          500: "#0065B3",
          600: "#004E8C",
          700: "#0B2540",
        },
        coral: {
          400: "#F26D63",
          500: "#ED1B24",
          600: "#C4141C",
        },
        line: "#D8E1E8",
        mint: "#0C6D20",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        urdu: ["var(--font-urdu)", "serif"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, #D8E1E8 1px, transparent 1px), linear-gradient(to bottom, #D8E1E8 1px, transparent 1px)",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(237, 27, 36, 0.35)" },
          "50%": { boxShadow: "0 0 0 10px rgba(237, 27, 36, 0)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
