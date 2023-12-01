/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ['SpaceGrotesk-Variable'],
        Satoshi: ['Satoshi-Variable'],
        Modelica02M: ['Modelica02-Medium'],
        Modelica02B: ['Modelica02-Bold'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
