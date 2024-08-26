import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://iili.io/d9YjfMN.md.png')"
      },
      colors: {
        blue: '#B7CFD7', // Adding the color under the key 'blue'
      },
    },
  },
  plugins: [],
};

export default config;
