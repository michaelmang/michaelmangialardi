module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'display': ['Wotfard', 'serif']
    },
    colors: {
      light: '#FDFCDC',
      dark: '#0A0C10',
      background: '#0081A7',
      'background-light': '#00AFB9',
      accent: '#9CD3BC',
      cta: "#F07167",
      sun: "#FFE773",
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
