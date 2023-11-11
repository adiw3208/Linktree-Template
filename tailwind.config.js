const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#FFAD00",
        secondary: "#424242",
      },
      boxShadow: {
        fixed: "8px 8px 16px rgba(0, 0, 0, 0.5);",
        invFixed: "inset 8px 8px 16px rgba(0, 0, 0, 0.5)",
        smFixed: "5px 5px 10px rgba(0, 0, 0, 0.5);",
        smInvFixed: "inset 5px 5px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
});
