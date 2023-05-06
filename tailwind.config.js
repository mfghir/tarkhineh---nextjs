const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#417F56",
        },
        shade: {
          "100": "#396F4B",
          "200": "#315F41",
          "300": "#294F36",
          "400": "#21402B",
          "500": "#183020",
          "600": "#102016",
          "700": "#08100B",
        },
        tint: {
          "100": "#E5F2E9",
          "200": "#CAE4D3",
          "300": "#B0D7BD",
          "400": "#96C9A7",
          "500": "#7CBC91",
          "600": "#61AE7B",
          "700": "#4E9968",
        },
        gray: {
          "100": "#F9F9F9",
          "200": "#E1E1E1",
          "300": "#EDEDED",
          "400": "#CBCBCB",
          "500": "#ADADAD",
          "600": "#757575",
          "700": "#717171",
          "800": "#353535",
        },
        error: {
          DEFAULT: "#C30000",
          light: "#ED2E2E",
          lighter: "#FFF2F2",
        },
        success: {
          DEFAULT: "#00966D",
          light: "#00BA88",
          lighter: "#F3FDFA",
        },
        warning: {
          DEFAULT: "#A9791C",
          light: "#F4B740",
          lighter: "#FFF8E1",
        }
      },
      fontFamily :{
        sans: ["var(--font-estedad)", ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      'xs-p': '375px',
    }
  },
  plugins: [],
};
