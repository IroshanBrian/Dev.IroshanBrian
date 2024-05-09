/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
      },
      fontFamily: {
        h1: ['Nunito'],
      }
    },
  },
  plugins: [],
}

