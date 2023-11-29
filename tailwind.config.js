/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-pattern": "url('/Swirl.png')",
      },
      boxShadow: {
        inputShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      fontFamily: {
        comfortaa: "Comfortaa",
        Outfit: "Outfit",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
