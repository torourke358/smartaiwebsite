import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Two-color discipline: deep navy + warm accent only.
        navy: {
          DEFAULT: "#0F2A43",
          dark: "#0A1D2F",
          light: "#1C3D5E",
        },
        accent: {
          DEFAULT: "#E8A33D",
          dark: "#C9871F",
          light: "#F3C273",
        },
      },
    },
  },
  plugins: [],
};

export default config;
