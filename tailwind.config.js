/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     './components/**/*.{html,js}'
  ],
  theme: {
    colors:{
      'komla':"#EE5A27",
      'kala' : '#000000',
    },
    extend: {
      
    },
  },
  plugins: [],
}
