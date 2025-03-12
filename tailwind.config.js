/** @type {import('tailwindcss').Config} */
export const content = [
  './src/app/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'dark-prmy': '#EAEAEA',
      'dark-scnd': '#9B4DFF',
      'dark-bg': '#0D0D0D',
      'light-prmy': '#0D0D0D',
      'light-scnd': '#2563EB',
      'light-bg': '#EAEAEA',
    },
  },
};
export const plugins = [
  require('tailwindcss-debug-screens'),
];
