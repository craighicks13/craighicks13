/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD60A',
        primary_2: '#FFC300',
        secondary: '#003566',
        secondary_2: '#001D3D',
        textmain: '#000814',
      }
    },
  },
  plugins: [],
}
