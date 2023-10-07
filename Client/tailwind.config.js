/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
      '2xl': '1440px',
    },

    extend: {
      colors: {
        modalBg: '#F0F0F6',
        background: '#E4E6EB',
        cta: '#FFB400',
        // lightCta: '#FFB400',
        txt: '#767676',
        hdTxt: '#2B2B2B',
        available: '#7EB942',
      },
    },
  },
  plugins: [],
};
