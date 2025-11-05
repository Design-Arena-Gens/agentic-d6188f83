import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        editorial: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          accent: '#e63946',
          light: '#f8f9fa',
        }
      }
    },
  },
  plugins: [],
};
export default config;
