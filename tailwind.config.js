/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        blob_2: "blob_2 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-10px, 50px) scale(0.9)" },
        },
        blob_2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-20px, 30px) scale(1.1)" },
          "66%": { transform: "translate(10px, 50px) scale(0.9)" },
        },
      },
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
