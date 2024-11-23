import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFE6A7",
        foreground: "#BB9457",
        primary: "#432818",
        secondary: "#99582A",
        danger: "#6F1D1B",
      },
    },
  },
  plugins: [],
} satisfies Config;
