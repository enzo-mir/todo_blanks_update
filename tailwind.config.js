/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-width: 800px)' },
      }
    },
  },
  plugins: [],
}