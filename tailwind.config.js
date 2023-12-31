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
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 100px) scale(0.9)" },
        },
        blob_2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-30px, 50px) scale(1.1)" },
          "66%": { transform: "translate(20px, 100px) scale(0.9)" },
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
      colors: {
        "primary-dark": "#1E1E1E",
        "primary-light": "#F5F5F5",
        "secondary-dark": "#007ACC",
        "secondary-light": "#363636",
        "accent-dark": "#569CD6",
        "accent-light": "#0D0D0D",
        "text-dark": "#D4D4D4",
        "text-light": "#1F1F1F",
        "error-dark": "#F44747",
        "error-light": "#FF0008",
        "sub-dark": "#4D4D4D",
        "sub-light": "#4F4F4F",
        "sub-alt-dark": "#191919",
        "sub-alt-light": "#E0E0E0",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
