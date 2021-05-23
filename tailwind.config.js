module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down-1": "fade-in-down 1s ease-out 1s",
        "fade-in-down-2": "fade-in-down 1s ease-out 2s",
        "fade-in-down-3": "fade-in-down 1s ease-out 3s",
        "fade-in-down-4": "fade-in-down 1s ease-out 4s",
        "fade-in-down-5": "fade-in-down 1s ease-out 5s",
        "fade-in-down-6": "fade-in-down 1s ease-out 6s",
        "fade-in-down-7": "fade-in-down 1s ease-out 7s",
        "fade-in-down-8": "fade-in-down 1s ease-out 8s",
        "fade-in-down-9": "fade-in-down 1s ease-out 9s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
