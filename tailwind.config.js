const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFD60A',
        primary_2: '#FFC300',
        secondary: '#003566',
        secondary_2: '#001D3D',
        textmain: '#000814',
        accent: {
          100: '#DBFF00',
          200: '#00FF94',
          300: '#00E0F3',
        },
      },
      fontFamily: {
        primary: ['arboria', 'articulat-cf', ...fontFamily.sans],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
