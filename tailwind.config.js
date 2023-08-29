/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'hsl(266, 74%, 65%)',
      'primary-dark': 'hsl(266, 86%, 58%)',
      'grayish-blue': 'hsl(228, 12%, 32%)',
      'dark-grayish-blue': 'hsl(225, 8%, 21%)',
      'light-grayish-blue': 'hsl(226, 8%, 56%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'black',
      'positive-green': 'hsl(176, 72%, 46%)',
      'negative-red': 'hsl(338, 87%, 66%)',
      'transparent': 'transparent'
    },
    fontSize: {
      sm: '12px',
      base: '16px',
      xl: '18px',
      xxl: '24px',
      xxxl: '32px'
    }
  },
  plugins: [],
}

