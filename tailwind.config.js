/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: '#000080BD',
        White: '#fff'
      },
      animation: {
        'bounce-reset': 'bounce-reset 1s ease-in-out',
      },
      keyframes: {
        'bounce-reset': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
    },
  },
  plugins: [],
}