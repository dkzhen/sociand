/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292444",
        primaryBg: "#1F1A31",
        primaryRed: "#E94A66",
      },
      fontFamily: {
        Roboto: "'Roboto Mono', monospace",
        poppins: "font-family: 'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
