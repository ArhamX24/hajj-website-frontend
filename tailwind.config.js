/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('src/Images/bg/hero-desktop.jpg')",
        'hero-tablet': "url('')",
        'hero-mobile': "url('')"
      },
      backgroundColor:{
        'primary': '#347928',
      },
      borderColor:{
        'primary': '#347928',
      },
      height: {
        "hero-h": "60vh"
      }
    },
  },
  plugins: [],
}

