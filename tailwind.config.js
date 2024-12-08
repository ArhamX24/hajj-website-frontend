/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('src/Images/bg/hero-desktop-2.jpg')",
        'hero-tablet': "url('')",
        'hero-mobile': "url('')"
      },
      backgroundColor:{
        'primary': '#347928',
        "form-btn": "#FFA500"
      },
      borderColor:{
        'primary': '#347928',
      },
      height: {
        "hero-h": "60vh"
      },
      width: {
        "30%" : "30%"
      },
      textColor: {
        "form-title": "#FFA500"
      }
    },
  },
  plugins: [
    function ({ addBase }){ addBase({ 'input[type="number"]::-webkit-outer-spin-button': { '-webkit-appearance': 'none', margin: '0', }, 'input[type="number"]::-webkit-inner-spin-button': { '-webkit-appearance': 'none', margin: '0', }, 'input[type="number"]': { '-moz-appearance': 'textfield', }, }); }],
}

