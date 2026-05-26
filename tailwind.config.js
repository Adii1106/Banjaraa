export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: "#ff7a00",   // your custom orange
        },
        fontFamily: {
          boathouse: ["Boathouse", "cursive"], // optional custom font
        },
      },
    },
    plugins: [],
  };