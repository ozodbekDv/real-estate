import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        sarif: "var(--font-sarif)",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      colors: {
        primary: {
          100: "#d5dcfb",
          200: "#b1c1f9",
          300: "#8da5f7",
          400: "#698af5",
          500: "#3E54EB",
          600: "#365ace",
          700: "#2844a8",
          800: "#1a2e83",
          900: "#0d195d",
          "90": "#4570f3e6",
          "80": "#4570f3cc",
          "20": "#4570f333",
          "10": "#4570f31a",
          "5": "#4570f30d",
        },
        secondary: {
          100: "#e9f4ce",
          200: "#def1b0",
          300: "#d3ee92",
          400: "#c7ea74",
          500: "#bce757",
          600: "#96b948",
          700: "#708b39",
          800: "#4b5d29",
          900: "#253f1a",
          "90": "#bce757e6",
          "80": "#bce757cc",
          "20": "#bce75733",
          "10": "#bce7571a",
          "5": "#bce7570d",
        },
        tertiary: {
          100: "#f6cbe0",
          200: "#f1a9ce",
          300: "#ec87bc",
          400: "#e665aa",
          500: "#e04398",
          600: "#b5377a",
          700: "#8a2a5c",
          800: "#5f1d3d",
          900: "#340f1f",
          "90": "#e04398e6",
          "80": "#e04398cc",
          "20": "#e0439833",
          "10": "#e043981a",
          "5": "#e043980d",
        },
        dark: {
          500: "#0F1015",
          "90": "#0e0e0ee6",
          "80": "#0e0e0ecc",
          "20": "#0e0e0e33",
          "10": "#0e0e0e1a",
          "5": "#0e0e0e0d",
        },
        gray: {
          500: "#999999",
          "90": "#999999e6",
          "80": "#999999cc",
          "20": "#99999933",
          "10": "#9999991a",
          "5": "#9999990d",
        },
        light: {
          500: "#e2e2e2",
          "90": "#e2e2e2e6",
          "80": "#e2e2e2cc",
          "20": "#e2e2e233",
          "10": "#e2e2e21a",
          "5": "#e2e2e20d",
        },
        white: {
          500: "#ffffff",
          "90": "#ffffffe6",
          "80": "#ffffffcc",
          "20": "#ffffff33",
          "10": "#ffffff1a",
          "5": "#ffffff0d",
        },
        colorOptions: {
          1: "#34c48c",
          2: "#38d1bd",
          3: "#a04cf4",
          4: "#4a66f0",
        },
        gradient: {
          1: "#34c48c", // Left color — actual gradient setup done via bg-gradient-to-X
          2: "#38d1bd",
          3: "#a04cf4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
