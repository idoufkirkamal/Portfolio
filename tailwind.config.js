/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#06b6d4", 
        primaryDark: "#3b82f6",
      },
      animation:{
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}

