/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4285F4",
        red: "#EA4335",
        lightGray: "#F1F3F4",
        dark: "#2D2D2D"
      },
      fontFamily: {
        GoogleSans: ["Google Sans", 'sans']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}