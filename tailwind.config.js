import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        primaryBg: "#121212",


      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
    // theme: {
    //   colors: {
    //     primary: "#FF6B00",
    //     primaryBg: "#121212",
    //   },
    // },


  )],
}
