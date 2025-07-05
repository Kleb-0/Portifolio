/** @type {import('tailwindcss').Config} */
module.exports = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
];
module.exports = {
  extend: {
    colors: {
      "dark-prmy": "#EAEAEA",
      "dark-scnd": "#9B4DFF",
      "dark-bg": "#0D0D0D",
      "light-prmy": "#0D0D0D",
      "light-scnd": "#2563EB",
      "light-bg": "#EAEAEA",
    },
    fontFamily: {
      ringift: ["Ringift", "serif"],
    },
  },
};
export const plugins = [require("tailwindcss-debug-screens")];
