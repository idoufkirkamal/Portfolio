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
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#0891b2", 
        primaryDark: "#3b82f6",
      },
      animation:{
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        hero_shape: 'url(/images/profile/shape-1.svg)',
        hero_shape2_light: 'url(/images/profile/shape-2-light.svg)',
        hero_shape2_dark: 'url(/images/profile/shape-2-dark.svg)',
      },      
    },
  },
  plugins: [],
}

