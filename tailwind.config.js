/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-prmy': '#EAEAEA',
        'dark-scnd': '#9B4DFF',
        'dark-bg': '#0D0D0D',
        'light-prmy': '#0D0D0D',
        'light-scnd': '#2563EB',
        'light-bg': '#EAEAEA',
      },
      textShadow: {
        'text-light': '0 0 5px rgba(255, 255, 255, 0.7)',
        'text-medium': '0 0 10px rgba(255, 255, 255, 0.7)',  
        'text-dark': '0 0 15px rgba(255, 255, 255, 0.7)',    
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), 
  ],
}
