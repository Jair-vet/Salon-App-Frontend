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
      backgroundImage: {
        'app' : "url('/img/1.jpg')"
      }
      // colors: {
      //   "vtd-primary": colors.green
      // }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

