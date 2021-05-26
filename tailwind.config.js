module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ["motion-safe"],
      colors: {
        main: "#1e1f22",
        secondary: "#151618",
        teriary: "#0c0c0e",
        green: "#2bebc8",
        purple: "#6746ed",
      },
    },
    fontFamily: {
      ptserif: ["PT Serif"],
      cinzel: ["Cinzel"],
      lato: ["Lato"],
      poppins: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
