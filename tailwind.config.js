/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#1D2127',
        container: '#272C34',
        primary: '#C0EBB9',
        secondary: '#A1D499',
        input: '#303742',
        inputBorder: '#3D4758',
        'secondary-text': '#878787',
      },
    },
  },
  plugins: [],
}