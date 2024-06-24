/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43a724",
        secondary: "#21282E",
        paraColor: "#717275",
      },
    },
  },
  plugins: [],
};
