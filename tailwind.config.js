module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ["motion-safe"],
      colors: {
        main: "#272c38",
        secondary: "#1e2530",
        ternary: "#64ffda",
      }
    },
    fontFamily: {
      nunito: ["Nunito"],
      playfair: ["Playfair Display"],
      merriweather: ["Merriweather"],
      ptserif: ["PT Serif"],
      cinzel: ["Cinzel"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
