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
        // homePage
        'background-home-desktop': "url('../assets/home/background-home-desktop.jpg')",
        'background-home-tablet': "url('../assets/home/background-home-tablet.jpg')",
        'background-home-mobile': "url('../assets/home/background-home-mobile.jpg')",
        // destination
        'background-dest-desk': "url('../assets/destination/background-destination-desktop.jpg')",
        'background-dest-tab': "url('../assets/destination/background-destination-tablet.jpg')",
        'background-dest-mobile': "url('../assets/destination/background-destination-mobile.jpg')",
        // crew
        'background-crew-desk': "url('../assets/crew/background-crew-desktop.jpg')",
        'background-crew-tab': "url('../assets/crew/background-crew-tablet.jpg')",
        'background-crew-mobile': "url('../assets/crew/background-crew-mobile.jpg')",
        // technology
        'background-tech': "url('../assets/technology/background-technology-desktop.jpg')",
      },
      margin: {
        '0.6': '0.688rem',
        '4.5': '18px',
        '6.5': '1.688rem',
        '12.5': '3.188rem',
        '30': '7.688rem',
      },
      fontSize: {
        '.5xl': '1rem',
        '1.5xl': '1.25rem',
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
        '7.5xl': '5rem',
        '8.5xl': '6.25rem',
        '10xl': '9.3rem'
      },
      colors: {
        'white-400': 'rgba(255, 255, 255, 0.04)',
        'custom-blue': '#d0d6f9',
      },
      maxWidth: {
        'article': '22rem',
      },
      width: {
        '42': '170px',
        '68': '17rem',
        '75': '18.75rem',
        '81': '20.5rem',
        '82': '21rem',
        '102': '27.8rem',
        '108': '28.125rem',
        '109': '29rem',
        '110': '29.375rem',
        '112': '31rem',
        '116': '36rem',
        '120': '38.375rem',
        'nav': '51.875rem'
      },
      height: {
        '0.5': '1px',
        '2.125': '2.125rem',
        '42': '170px',
        '68': '17rem',
        '86': '23rem',
      },
      letterSpacing: {
        'nav-text': '0.169rem',
        'custom-widest': '0.297rem'
      },
      lineHeight: {
        '18': '5rem',
        'extra-height': '7.188rem',
      },
      inset: {
        '10.5': '167px',
        '13.5': '55px',
        '22': '5.5rem',
        '26': '103px',
        '30': '7.6rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '50': '12.6rem',
        '54': '13.75rem',
        '68': '17rem',
        '74': '18.5rem',
        '76': '19rem',
        '82': '21rem',
        '83': '21.5rem',
        '86': '23rem',
        '98': '25rem',
        '102': '29rem',
        '103': '29.3rem',
        '105': '31rem',
        '110': '36rem',
        '114': '40rem',
        '116': '43rem',
        '121': '49.3rem',
        'mExplore': '35rem',
        'dExplore': '41rem',
        'nav': '38rem',
        'lExplore': '59rem',
      },
      opacity: {
        '4': '0.04',
      },
      transitionDuration: {
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}
