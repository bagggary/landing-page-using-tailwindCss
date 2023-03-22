/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavy: {
          "0% , 100%": {
            transform: "scale(0.5)",
          },
          "50%": {
            transform: "scale(1.5)",
          },
        },
      },
      animation: {
        wavy: "wavy 1000ms linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/openVarient"),
    require("./plugins/animationDelay"),
    require("./plugins/captionBottom"),
  ],
};
