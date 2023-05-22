/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        openSens: "'Open Sans', sans-serif",
      },
      colors: {
        primary: '#001767',
      },
      backgroundImage: {
        why_us_bg: `url('/image/curve_bg.png')`,
        services_bg: `url('/image/curve_bg_mobile.png')`,
      },
    },
  },
  plugins: [],
};
