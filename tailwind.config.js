/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'priColor': '#3A6B35',
        'secColor': '#CBD18F',
        'thirColor': '#E3B448',
      }
    },
  },
  plugins: [require("daisyui")],
}

