/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"'],
        pixel: ['"Pixelify Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
      },
      animation: {
        "fade-in-left": "fadeInLeft 2.1s ease-out forwards",
        "fade-in-up": "fadeInUp 2.1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
