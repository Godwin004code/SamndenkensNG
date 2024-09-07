/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1000px'},
      'md-2': {'max': '950px'},
      'md': {'max': '767px'},
      'sm': {'max': '890px'},
      'xs': {'max': '600px'},
    },
    
  },
  plugins: [],
}

