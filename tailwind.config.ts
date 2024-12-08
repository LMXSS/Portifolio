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
        primary: '#A682FF',
        secondary: '#715AFF',
        accent: '#5887FF',
        highlight: '#55C1FF',
        dark: '#13131f',
      },
    },
  },
  plugins: [],
} satisfies Config;
