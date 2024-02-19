/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7743DB',
        background: '#191924',
      },
    },
    fontFamily: {
      signature: ['"Great Vibes"'],
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          // eslint-disable-next-line no-undef
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#7743DB',
        },
      },
    ],
  },

  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
