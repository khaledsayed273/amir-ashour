/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackColor": "#100F09",
        "grayColor": "rgba(214, 157, 102, 1)",
        "sectionColor": "rgba(16, 15, 9, 1)",
        "sectionColorLg": "rgba(5, 5, 3, 1)"
      }
    },
  },
  plugins: [],
};
