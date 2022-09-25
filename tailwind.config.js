/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**.html'],
  theme: {
    extend: {
      fontFamily: {
        'Barlow-Condensed': ['Barlow Condensed', 'regular'],
        'Barlow': ['Barlow', 'regular'],
        'Bellefair': ['Bellefair', 'sans sarif']
      },
      backgroundImage: {
        'background-home': "url('../assets/home/background-home-desktop.jpg')",
        'background-destination': "url('../assets/destination/background-destination-desktop.jpg')",
        'background-crew': "url('../assets/crew/background-crew-desktop.jpg')",
        'background-tech': "url('../assets/technology/background-technology-desktop.jpg')",
      },
      margin: {
        '0.6': '0.688rem',
        '12.5': '3.188rem',
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '10xl': '9.3rem'
      },
      colors: {
        'white-400': 'rgba(255, 255, 255, 0.04)',
        'custom-blue': '#d0d6f9',
      },
      width: {
        '68': '17rem',
        '108': '28.125rem',
        'nav': '51.875rem'
      },
      height: {
        '0.5': '1px',
        '68': '17rem',
        '86': '23rem',
      },
      letterSpacing: {
        'custom-widest': '0.297rem'
      },
      inset: {
        '10.5': '167px',
        '13.5': '55px',
        '22': '5.5rem',
        '30': '7.6rem',
        '38': '9.5rem',
        '86': '23rem',
        '87': '24rem',
        'nav': '38rem',
        'tExplore': '31rem',
        'lExplore': '62.5rem',
      },
      opacity: {
        '4': '0.04',
      },
    },
  },
  plugins: [],
}
