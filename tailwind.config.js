/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        'book-brown': '#8B4513',
        'book-chocolate': '#D2691E',
        'book-text': '#2C1810',
        'book-bg': '#FAF8F3',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
