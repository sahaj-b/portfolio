/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    keyframes: {
      moveStripes: {
        "0%": { backgroundPosition: '0 0' },
        "100%": { backgroundPosition: '0 40px' }
      },
      startHead: {
        "0%": { top: '-0.8px', left: '-0.5px' },
        "70%": { top: '-0.8px', left: '-0.5px' },
        "100%": { top: '-0.5rem', left: '0.5rem' }
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        play: ["Playwrite HU", "cursive"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [catppuccin({ defaultFlavour: "mocha" })],
};

