import type { Config } from "tailwindcss";

const config: Config = {
  // Enable manual dark mode via a class on <html>
  darkMode: "class",

  // Files Tailwind should scan
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      /* ========= Colors ========= */
      colors: {
        primary: "#0084ff", // your blue accent
        darkbg: "#0b1220",  // main dark background
      },

      /* ========= Widths ========= */
      width: {
        "6/7": "85.7142857%",
      },

      /* ========= Border Widths ========= */
      borderWidth: {
        3: "3px",
      },

      /* ========= Shadows (your design language) ========= */
      boxShadow: {
        "sm/10": "0 4px 12px rgba(0, 0, 0, 0.1)",
        "md/15": "0 6px 20px rgba(0, 0, 0, 0.15)",
        "lg/20": "0 10px 30px rgba(0, 0, 0, 0.2)",
        "xl/30": "0 15px 45px rgba(0, 0, 0, 0.3)",
      },

      /* ========= Transitions ========= */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};

export default config;
