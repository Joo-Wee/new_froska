/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header-color': '#2E1A47',
        'header-color_btn': '#6e57e0',
        'deep-purple': '#2E1A47',
        'turqoise': '#40E0D0',
        'body-color': '#9e96eb'
    },

      backgroundImage: {
        'hero-pattern': "url('./media/Landing page.jpg')",
        'games-pattern': "url('./media/OBSKLD0.jpg')"
      }
  },
  plugins: [],
}
}
