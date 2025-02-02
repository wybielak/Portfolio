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
        'smaller-screen-pc': '98vh',
        'smaller-screen': '98vh',
        'halfscreen': '70vh',
        '500px': '500px',
        '230px': '230px',
        
      }
    },
  },
  plugins: [],
}

