/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#E44D26',
        customOrangeLight: '#F16529',
      },
    },
  },
  plugins: [],
}