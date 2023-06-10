/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#ff723a',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}