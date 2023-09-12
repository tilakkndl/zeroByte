/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#c53434',
        'secondary-color': '#a00f20',
        'text-primary-color': '#FFF5FF',
        'text-secondary-color': '#595959',
      },
    },
  },
  plugins: [],
};
