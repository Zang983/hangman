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
    lineHeight: {
      "120": "120%"
    },
    extend: {
      boxShadow: {
        "returnBtn":"inset 0 -5px 0 -1px rgba(157,45,245,0.25)",
        "returnBtnTablet":"inset 0 -6px 0 7px rgba(157,45,245,0.25)",
        "categoryThumbnail":["inset 0px -2px 0px 3px #140E66","inset 0px 1px 0px 6px #3C74FF"]
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