/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      boxShadow: {
        'custom': 'inset 2px 2px 3px #d9d9d9, inset -2px -2px 3px #ffffff, 2px 2px 3px #d9d9d9, -2px -2px 3px #ffffff',
      }
    },
  },
  plugins: [],
}

