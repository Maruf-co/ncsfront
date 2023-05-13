/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'pff-yellow': {
          300: '#ffe22d',
          400: '#ffdd2d',
          500: '#ffd22d',
          600: '#ffc22d',
        },
        'pff-blue': {
          100: '#ecf1f7',
          200: '#e4ebf3',
          400: '#338fee',
          500: '#336fee',
          600: '#334fee',
        },
      },
    },
  },
  plugins: [],
};
