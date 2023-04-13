/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '16': '16px',
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bild1.jpg')",
        'hero-about': "url('/assets/bild3.jpg')",
        'hero-contact': "url('/assets/bild5.jpg')",
        'hero-projects': "url('/assets/bild6.jpg')"
    },
    height: {
      '100vh': '100vh',
      '60vh': '60vh',
      '80vh': '80vh',
      '300' : '300px'
    },

    keyframes: {
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
    },
    animation: {
    'waving-hand': 'wave 2s linear infinite',
    },

    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
      'background': 'background'
    },

  plugins: [],
}

}}