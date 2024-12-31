/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: '#000080BD',
        White: '#fff',
        Bg: '#1E0D37',
        Text: '#3B8C2E',
        DBlue: '#000080',
        DPText: 'rgb(60, 60, 60)',
        DPBtn: 'rgb(236, 179, 2)'
      },
      animation: {
        flash: 'flash 2s ease-in-out forwards', // Animates once
        'flash-slow': 'flash 4s ease-in-out forwards',
        'bounce-reset': 'bounce-reset 1s ease-in-out',
      },
      keyframes: {
        'bounce-reset': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
        flash: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}