/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dusk-white': 'rgb(255, 255, 255)',
        'dusk-black':{
          100: 'rgb(140, 140, 140)',
          800: 'rgb(41, 41, 41)',
          900: 'rgb(31, 31, 31)',
          1000: 'rgb(24, 24, 24)',
        }
      },
    },
  },
  plugins: [nextui()],
}
