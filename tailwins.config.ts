import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D6E3FF",
          200: "#B0C7FF",
          300: "#8AACFF",
          400: "#6490FF",
          500: "#3E75FF",
          600: "#1D5FEC",
          700: "#1549B3",
          800: "#0F3480",
          900: "#081F4D",
        },
        secondary: {
          100: "#E9F4D8",
          200: "#D5EDB6",
          300: "#C1E695",
          400: "#ADDF73",
          500: "#99D851",
          600: "#7FBF3E",
          700: "#63992F",
          800: "#486F21",
          900: "#2D4513",
        },
        tertiary: {
          100: "#FAD6EC",
          200: "#F7ACDA",
          300: "#F382C7",
          400: "#F058B5",
          500: "#DC36A0",
          600: "#B42C83",
          700: "#8C2166",
          800: "#64164A",
          900: "#3C0C2D",
        },
        dark: {
          500: "#1A1A1A",
          90: "#2E2E2E",
          80: "#404040",
          20: "#CCCCCC",
          10: "#E5E5E5",
          5: "#F2F2F2",
        },
        gray: {
          500: "#9E9E9E",
          90: "#B3B3B3",
          80: "#C7C7C7",
          20: "#EDEDED",
          10: "#F6F6F6",
          5: "#FAFAFA",
        },
        light: {
          500: "#F5F7FA",
          90: "#F8F9FB",
          80: "#FBFCFD",
          20: "#FCFCFD",
          10: "#FDFDFE",
          5: "#FEFEFF",
        },
        white: {
          500: "#FFFFFF",
          90: "#FFFFFFE6",
          80: "#FFFFFFCC",
          20: "#FFFFFF33",
          10: "#FFFFFF1A",
          5: "#FFFFFF0D",
        },
        gradient: {
          1: "linear-gradient(90deg, #A1D561 0%, #00C2A8 100%)",
          2: "linear-gradient(90deg, #00C2A8 0%, #745EFF 100%)",
          3: "linear-gradient(90deg, #745EFF 0%, #D12D8C 100%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  // Add body style
};

export default config;
