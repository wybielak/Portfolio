/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-darkbrown-olivegreen': 'linear-gradient(60deg, #737c47, #5a5442)',
        'gradient-olivegreen-darkbrown': 'linear-gradient(60deg, #5a5442, #737c47)',
      },
      colors: {
        deepBlue: "#2A3A44",
        forestGreen: "#3E4F3B",
        charcoal: "#1F1F1F",
        mistGray: "#D2D5D6",
        softBeige: "#EAE3D7",
        silverBlue: "#B3C1C7",
        sageGreen: "#A4B184",
        mossGreen: "#8DA06E",
        mintOlive: "#B8C295",
        forestBrown: "#4A4636",
        oliveGreen: "#60694A",
        darkBrown: "#2E2B1F",
        darkerBrown: "#15180A",
        evil: "#C13232",
      },
      width: {
        'halfscreen': '90vw'
      },
      height: {
        'halfscreen': '70vh',
      }
    },
  },
  plugins: [],
}

