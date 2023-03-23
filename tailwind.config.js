/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#9b4de0',
        'main-bg-color': '#170f23',
        'header-bg-color': 'rgba(23,15,35,0.8)',

        'text-primary': '#ffff',
        'text-secondary': '#ffffff80',
        'text-link-hover': '#c273ed',
      },

      fontFamily: {
        'font-default': ['ZingMp3', 'Arial', 'sans-serif'],
      },

      height: {
        header: '70px',
      },

      spacing: {
        'padding-header': '59px',
      },

      screens: {
        lg: { max: '1133px' },
      },
    },
  },
  plugins: [],
};
