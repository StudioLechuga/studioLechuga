module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lechuga: {
          DEFAULT: "#84D076",
          50: "#FFFFFF",
          100: "#F1FAF0",
          200: "#D6EFD1",
          300: "#BBE5B3",
          400: "#9FDA94",
          500: "#84D076",
          600: "#5EC24C",
          700: "#479F37",
          800: "#347528",
          900: "#224C1A",
        },
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
