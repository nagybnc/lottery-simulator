/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#020056",
        "light-greenish-blue": "#A5D9C8",
        "yellowish-beige": "#F6F0C6",
      },
      boxShadow: {
        "container-shadow": "2px 2px 10px rgba(0, 0, 0, 0.1);",
      },
      backgroundImage: {
        "mito-gradient":
          "linear-gradient(270deg, #F6F0C6 0%, #D9135D 0.01%, rgba(214, 19, 92, 0.996895) 0.02%, #F6F0C6 0.03%, #A6D9C8 80.73%, #A5D9C8 100%)",
      },
    },
  },
  plugins: [],
};
