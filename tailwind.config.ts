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
      },
    },
  },
  plugins: [],
};
export default config;
