/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      
    ],
    theme: {
      extend: {
        
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
  }
  