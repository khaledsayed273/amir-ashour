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
    fontSize: {
      sm: '14px',
      base: '16px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '36px',
      '4xl': '80px',
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    }
  },
  plugins: [],
};
