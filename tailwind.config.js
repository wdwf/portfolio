/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 30s linear infinite',
      },
      fontFamily: {
        SpaceGrotesk: ['SpaceGrotesk-Variable'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
