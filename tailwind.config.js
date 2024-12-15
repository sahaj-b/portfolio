/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    keyframes: {
      moveStripes: {
        "0%": { backgroundPosition: '0 0' },
        "100%": { backgroundPosition: '0 40px' }
      },
      moveStripesReverse: {
        "0%": { backgroundPosition: '0 40px' },
        "100%": { backgroundPosition: '0 0' }
      },
      startHead: {
        "0%": { top: '-0.8px', left: '-0.5px' },
        "50%": { top: '-0.8px', left: '-0.5px' },
        "100%": { top: '-0.5rem', left: '0.5rem' }
      },
      startCard: {
        "0%": { top: '-0.8px', left: '-0.5px' },
        "20%": { top: '-0.8px', left: '-0.5px' },
        "100%": { top: '-0.5rem', left: '0.5rem' }
      },
      startSocials: {
        "0%": { top: '-0.4rem', left: '0.4rem' },
        "20%": { top: '-0.4rem', left: '0.4rem' },
        "100%": { top: '0', left: '0' }
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
      colors: {
        rosewater: "var(--rosewater)",
        flamingo: "var(--flamingo)",
        pink: "var(--pink)",
        mauve: "var(--mauve)",
        red: "var(--red)",
        maroon: "var(--maroon)",
        peach: "var(--peach)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        teal: "var(--teal)",
        sky: "var(--sky)",
        sapphire: "var(--sapphire)",
        blue: "var(--blue)",
        lavender: "var(--lavender)",
        text: "var(--text)",
        subtext1: "var(--subtext1)",
        subtext0: "var(--subtext0)",
        overlay2: "var(--overlay2)",
        overlay1: "var(--overlay1)",
        overlay0: "var(--overlay0)",
        surface2: "var(--surface2)",
        surface1: "var(--surface1)",
        surface0: "var(--surface0)",
        baseClr: "var(--base)",
        mantle: "var(--mantle)",
        crust: "var(--crust)",
      },
    }
  },
};

