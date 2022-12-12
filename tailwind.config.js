/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryRed: 'hsl(0, 100%, 74%) ',
        primaryGreen: 'hsl(154, 59%, 51%)',
        accentBlue: 'hsl(248, 32%, 49%)',
        darkBlue: 'hsl(249, 10%, 26%)',
        grayishBlue: 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
