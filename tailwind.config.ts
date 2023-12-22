import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        backgroundCard: "#0E1218",
        borderPurple: "#8257E5;",
        borderButton: "#1A1A1A",
        textWhite: "#F1F1F1",
        woodsmoke: {
          "50": "#f7f6f9",
          "100": "#edebf3",
          "200": "#d8d3e4",
          "300": "#b5adcc",
          "400": "#8c80b0",
          "500": "#6d6097",
          "600": "#5a4c7d",
          "700": "#493e66",
          "800": "#3f3656",
          "900": "#383149",
          "950": "#070609",
        },
      },
    },
  },
  plugins: [],
};
export default config;
