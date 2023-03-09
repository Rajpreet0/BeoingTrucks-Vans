/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        glock: ['Gloock', 'sans-serif'],
      }
    },
    colors:{
      main: '#AD974F',
      main_text: '#231F20',
      bg: '#EAEAEA',
      fixed_bg: '#1c1c1c',
      sub_main: '#8E793E',
      white: '#fff',
      black: '#000',
    },
  },
  plugins: [],
}
