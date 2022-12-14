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
      spacing: {
        "dynamic-md": "min(70% , 55rem)",
        dynamic: "min(95% , 120rem)",
      },
      colors: {
        primary: "#272F54",
        secondary: "#C3BC05",
        topbar: "#F6F8F9",
        label: "#666D83",
        border: "#EBEDED",
        placeholder: "#D6D8DF",
        overlay: "rgba(0,0,0,0.5)",
        imageOverlay: "rgba(107, 114, 128, 0.5)",
      },

      gridTemplateColumns: {
        custom: "3rem 1.5fr 2fr 1.5fr 3rem",
      },
      gridTemplateRows: {
        custom: "3rem 1fr 1fr 3rem",
      },
      gridColumn: {
        "2/-2": "2/-2",
        "1/3s": "1/-3",
        "1/4s": "1/-4",
        "1/3e": "-1/3",
        "1/4e": "-1/4",
      },
      gridRow: {
        "2/-2": "2/-2",
        "1/2s": "1/3",
        "1/3s": "1/3",
        "1/2e": "-1/-3",
        "1/3e": "-1/-3",
      },
    },
  },
  
  // forms
  plugins: [require("tailwindcss-rtl"), require("@tailwindcss/forms")],
};
