/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bild1.jpg')"
    },
    height: {
      '60vh': '60vh',
    }
  },
  plugins: [],
}

}