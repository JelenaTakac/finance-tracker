/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'primary': '#003b73',
        'secondary': '#0074b7',
        'accent': '#60a3d9',
        'light': '#bfd7ed',
        },
    },
  },
  plugins: [],
};
