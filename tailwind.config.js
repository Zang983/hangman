/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgDesktop':"url('assets/images/background-desktop.svg')",
        'bgTablet':"url('assets/images/background-tablet.svg')",
        'bgMobile':"url('assets/images/background-mobile.svg')",
      },
    },
  },
  plugins: [],
}