/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "3xl": "8.5rem",
      "2xl": "5.5rem",
      "xl": "3rem",
      "base": "2rem",
      "sm": "1.625rem"
    },

    extend: {
      lineHeight:{
        "120":"120%"
      },
      boxShadow: {
        "returnBtn":"inset 0 -5px 0 -1px rgba(157,45,245,0.25)",
        "returnBtnTablet":"inset 0 -6px 0 7px rgba(157,45,245,0.25)",
        "generalShadow":["inset 0px -2px 0px 3px #140E66","inset 0px 1px 0px 6px #3C74FF"],
        "generalPink":["inset 0px -2px 0px 3px #140E66","inset 0px 1px 0px 6px #C642FB"],
        "modale":["inset 0px -8px 0px 4px #140E66","inset 0px 6px 0 8px #2463ff"],
        "playBtn":["inset 0px -4px 0 5px #243041","inset 0px -12px 0px 11px #9D2Df5"]
        
      },
      backgroundImage: {
        'bgDesktop': "url('assets/images/background-desktop.svg')",
        'bgTablet': "url('assets/images/background-tablet.svg')",
        'bgMobile': "url('assets/images/background-mobile.svg')",
      },
      colors: {
        "darkBlue": "rgb(38,22,118)",
        "blue": "rgb(36,99,255)"
      },
      screens: {
        'desktop': '1024px',
        'tablet': '768px'
      }
    },
  },
  plugins: [],
} 