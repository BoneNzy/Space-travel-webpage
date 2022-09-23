/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**.html'],
  theme: {
    extend: {
      fontFamily: {
        'Barlow': ['Barlow Condensed', 'regular'],
        'Bellefair': ['Bellefair', 'sans sarif']
      },
      backgroundImage: {
        'background': "url('../assets/home/background-home-desktop.jpg')"
      },
      margin: {
        '12.5px': '3.5rem',
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '10xl': '9.3rem'
      },
      colors: {
        'custom-blue': '#d0d6f9',
      },
      width: {
        '108': '28.125rem'
      },
      height: {
        '86': '23rem',
      },
      letterSpacing: {
        'custom-widest': '0.297rem'
      },
      inset: {
        '86': '23rem',
      }
    },
  },
  plugins: [],
}
