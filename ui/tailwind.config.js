module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EEEAF2",
          200: "#D4CBDF",
          300: "#BAABCC",
          400: "#866CA6",
          500: "#522D80",
          600: "#4A2973",
          700: "#311B4D",
          800: "#25143A",
          900: "#190E26",
        },
      },
      boxShadow: (theme) => ({
        primary: "0 0 0 3px theme('colors.primary.500')",
      }),
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        shrink: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        "slide-x-10": {
          "0%": { transform: "translateX(0, 0)" },
          "100%": { transform: "translateX(2.5rem)" },
        },
      },
      animation: {
        grow: "grow 0.6s infinite",
        shrink: "shrink 0.6s infinite",
        "slide-x-10": "slide-x-10 0.6s infinite",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "even", "hover", "focus"],
    cursor: ["responsive", "hover"],
    textColor: ["responsive", "hover", "focus", "focus-within"],
  },
  plugins: [],
};
