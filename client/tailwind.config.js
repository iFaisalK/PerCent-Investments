/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define separate fonts for headings and body text
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Font for body text
        heading: ['Montserrat', 'sans-serif'], // Font for headings
      },
    },
  },
  plugins: [],
}
