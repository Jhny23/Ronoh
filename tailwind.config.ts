import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#faf5ee",
        linen:     "#f3ebe0",
        blush:     "#ecd9c8",
        petal:     "#e0c4ae",
        rose:      "#c47a5a",
        terra:     "#a85c3e",
        clay:      "#7a3e28",
        espresso:  "#3a1c0e",
        fog:       "#c2b0a2",
        stone:     "#7a6a5e",
        sage:      "#8a9e80",
        dusk:      "#9e8a7a",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        script:  ["'Great Vibes'",        "cursive"],
        body:    ["'Jost'",               "system-ui", "sans-serif"],
        mono:    ["'DM Mono'",            "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(-3deg)" },
          "50%":     { transform: "translateY(-10px) rotate(-3deg)" },
        },
        "float-r": {
          "0%,100%": { transform: "translateY(0px) rotate(4deg)" },
          "50%":     { transform: "translateY(-14px) rotate(4deg)" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%":     { transform: "translate(-2%,-3%)" },
          "30%":     { transform: "translate(3%,-1%)" },
          "50%":     { transform: "translate(-1%,2%)" },
          "70%":     { transform: "translate(2%,1%)" },
          "90%":     { transform: "translate(-3%,3%)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.9s ease forwards",
        "fade-up-2": "fade-up 0.9s 0.15s ease forwards",
        "fade-up-3": "fade-up 0.9s 0.3s ease forwards",
        "fade-up-4": "fade-up 0.9s 0.45s ease forwards",
        "fade-up-5": "fade-up 0.9s 0.6s ease forwards",
        "fade-in":   "fade-in 1.2s 0.2s ease forwards",
        marquee:     "marquee 28s linear infinite",
        float:       "float 5s ease-in-out infinite",
        "float-r":   "float-r 6s ease-in-out infinite",
        grain:       "grain 0.4s steps(1) infinite",
        "scale-in":  "scale-in 1s 0.3s ease forwards",
        shimmer:     "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
