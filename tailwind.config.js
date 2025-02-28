/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "0rem",
        md: "0.5rem",
        lg: "1.5rem",
        xl: "0rem",
        "2xl": "0rem",
      },
    },
    extend: {
      colors: {
        primary: "#c026d3",
        secondary: "#475569",
        dark: "#0f172a",
      },
      fontFamily: {
        grechen: "Grechen Fuemen",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
