/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      // colors: {
      //   "vtd-primary": colors.green
      // }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

