/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#E5BF4A",
        "text-color": "#2a2a2a",
        "light-black": "#222222",
        "sec-text": "#0a0a0a",
        "light-gray": "#dfdfdf",
        "nav-link-bg": "#4c4c4c",
      },
    },
  },
  plugins: [
    // ...
    function ({ addUtilities }) {
      addUtilities({
        ".link": {
          "@apply px-2 text-white relative font-semibold uppercase cursor-pointer hover:text-primary-color":
            "",
        },
        ".Xpadding": {
          "@apply px-6 md:px-16 lg:px-7": "",
        },
        ".inputs": {
          "@apply bg-transparent w-full text-[#E5BF4A] border border-[#E5BF4A] py-3 px-4 outline-none placeholder:text-[#E5BF4A]":
            "",
        },
        ".textarea": {
          "@apply max-h-[130px] min-h-[130px]": "",
        },
      });
    },
  ],
};
