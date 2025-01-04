// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};