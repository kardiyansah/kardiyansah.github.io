/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
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
