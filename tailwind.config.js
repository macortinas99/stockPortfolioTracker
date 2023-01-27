/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    colors: {
      background: '#252422',
      background2: '#919096',
      primary: '#fffcf2',
      secondary: '#9ed8db',
      danger: '#eb5e28',
      success: '#4da167',
    },
    extend: {
      fontFamily: {
        'Sans-Narrow': ['"PT Sans Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
