/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        maincolor: "#2c3e50",
        secondcolor: "#1abc9c",
      },
    },
  },
  plugins: [],
}

