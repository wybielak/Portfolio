/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-darkbrown-olivegreen': 'linear-gradient(60deg, #737c47, #5a5442)',
      },
      backgroundColor: {
        darkbrown: "#5a5442",
        olivegreen: "#737c47",
      },
      textColor: {
        darkbrown: "#5a5442",
        olivegreen: "#737c47",
      },
      borderColor: {
        evil: "#dd3333"
      },
      width: {
        'smaller-screen-pc': '98vw',
        'smaller-screen': '96vw',
        'halfscreen': '90vw'
      },
      height: {
        'smaller-screen-pc': '96vh',
        'smaller-screen': '98vh',
        'halfscreen': '70vh'
      }
    },
  },
  plugins: [],
}

