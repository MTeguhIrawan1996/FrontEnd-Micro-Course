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
    },
  },
  plugins: [],
};
