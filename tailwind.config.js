/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-first-color"  : "#272727",
        "light-secondary-color"  :"#272727",
        
        "dark-first-color" : "#030712",
        "dark-secondary-color" : "#111827",
        "dark-third-color" : "#1f2937",
        "dark-fourth-color" :"#374151"
      }
    },
  },
  plugins: [],
}

