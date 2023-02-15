/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2E37A4",
        "secondary-color": "#4D55BC",
        "primary-hover": "#36C2CF",
        "primary-black": "#27272a",
        "secondary-black": "#6b7280",
        "footer-color": "#161A4F",
      },
      transitionProperty: {
        transform: "transform",
        "border-color": "border-color",
        color: "color",
        background: "background",
      },
      transitionDuration: {
        300: ".3s",
      },
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(.25,.01,.25,1)",
      },
      transitionDelay: {
        0: "0s",
      },
      animation: {
        slideup: "slideup 0.2s ease-in-out",
        slidedown: "slidedown 1s ease-in-out",
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowfade: "slowfade 2.2s ease-in-out",
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
