/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0a192f',
          800: '#112240',
          400: '#8892b0',
          300: '#a8b2d1',
          100: '#ccd6f6',
        },
        teal: {
          500: '#64ffda',
        },
      },
    },
  },
  plugins: [],
};