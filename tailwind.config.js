/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenst: '#036434',
        greensthov: '#00391D',
        creamst: '#FFFEF8',
        labelg: '#38845D',
        redradio: '#F25E5E',
        greenradio: '#6BE88E',
        blueradio: '#5ECEF2',
        yellowradio: '#E7D780',
        blackradio: '#252B2D',
        focus: '#38BBBB',
        redKoala: "#F25E5E",
        stickered: "#E0593D",
        stickeryellow: "#FEC50A",

    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif','black'],
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },   
    textShadow: {
      'custom': '3px 3px 0px rgba(208, 97, 70, 1)',
    },
    variants: {
      extend: {
        transform: ['responsive', 'hover'],
      },
    },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          'text-shadow': '3px 3px 0px rgba(208, 97, 70, 1)',
        },
      });
    }
  ],
}