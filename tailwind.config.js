/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
const { Background } = require('tsparticles-engine')
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
        dark: "#2C2C2C",
        light: "#f5f5f5",
        primary: "#676194", 
        primaryDark: "#3b82f6",
      },
      animation:{
        'spin-slow': 'spin 8s linear infinite',
      },
          
    },
  },
  plugins: [],
}

