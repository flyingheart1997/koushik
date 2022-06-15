module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode:'class',
  theme: {
    fontFamily: {
      'playfair': ['Tangerine'],
      'cormorant':['Cormorant']
    },
    extend: {
      colors: {
        green: {
          DEFAULT: 'green',
        },
        dark:{
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      }
    },
  },
  plugins: [],
}
