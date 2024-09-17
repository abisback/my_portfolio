/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '50%, 100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'black' },
        },
      },
      animation: {
        typing: 'typing 3.5s steps(20, end) infinite, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}

