/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#09060B',
        void:     '#120D14',
        plum:     '#2D1B33',
        amethyst: '#7B4FA0',
        gold:     '#C9A84C',
        champagne:'#E8D5A3',
        smoke:    '#8A7A8E',
        petal:    '#F0EAF2',
      },
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        serif:   ['"EB Garamond"', 'Georgia', 'serif'],
        body:    ['"Jost"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
