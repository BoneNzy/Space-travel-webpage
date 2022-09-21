/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**.html'],
  theme: {
    extend: {
      fontFamily: {
        'Barlow': ['Barlow Condensed', 'regular']
      },
      backgroundImage: {
        'background': "url('../assets/home/background-home-desktop.jpg')"
      },
      margin: {
        '12.5px': '3.5rem',
      }
    },
  },
  plugins: [],
}
