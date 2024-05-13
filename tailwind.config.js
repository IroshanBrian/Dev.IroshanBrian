/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#86868b",
        }
      },
      fontFamily: {
        h1: ['Nunito'],
        h2: ['Jersey'],
        title: ['Poppins'],
      }
    },
  },
  plugins: [],
}

