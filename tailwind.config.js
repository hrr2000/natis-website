/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      xs: "450px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      margin: {
        "1/12": "8.333333%",
        "2/12": "16.66666667%",
      },
      colors: {
        primary: "#272F54",
        secondary: "#C3BC05",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
