module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // For React components
    "./public/index.html", // For your main HTML file
  ],
  theme: {
    extend: {
      backgroundImage: {
        striped:
          "repeating-linear-gradient(45deg, #3B3A3D, #3B3A3D 5px, transparent 5px, transparent 20px)",
      },
      keyframes: {
        "blink-red": {
          "0%, 100%": {
            backgroundColor: "rgba(239, 68, 68, 0.7)",
            boxShadow: "0 0 30px 10px rgba(239, 68, 68, 0.5)",
          },
          "50%": {
            backgroundColor: "rgba(239, 68, 68, 0.5)",
            boxShadow: "0 0 30px 10px rgba(239, 68, 68, 1)",
          },
        },
      },
      plugins: [require("tailwindcss-animate")],
      animation: {
        "blink-red": "blink-red 2s infinite linear",
      },
    },
  },
};
