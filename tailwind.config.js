// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoomOut: "zoomOut 5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
