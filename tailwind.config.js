/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0F172A",
        surface: "#1E293B",
        "surface-2": "#263244",
        accent: "#38BDF8",
        "accent-2": "#818CF8",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px 2px rgba(56, 189, 248, 0.25)",
        "glow-purple": "0 0 20px 2px rgba(129, 140, 248, 0.25)",
      },
    },
  },
  plugins: [],
}
