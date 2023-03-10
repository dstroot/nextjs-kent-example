const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "",
      },
    ],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        100: "#f7f7f7",
        200: "#e6e9ee",
        300: "#dde0e4",
        400: "#818890",
        500: "#535661",
        600: "#4b4c53",
        700: "#3a3d4a",
        800: "#2e3039",
        900: "#1f2028",
      },
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      slate: colors.slate,
      green: colors.green,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-matter)", ...fontFamily.sans],
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: [
              {
                "blockquote p:first-of-type::before": false,
                "blockquote p:last-of-type::after": false,
                "code::before": false,
                "code::after": false,
                li: {
                  marginTop: "0",
                  marginBottom: "0",
                },
                cite: {
                  fontSize: "1.0rem",
                },
              },
            ],
          },
          lg: {
            css: [
              {
                li: {
                  marginTop: "0",
                  marginBottom: "0",
                },
                cite: {
                  fontSize: "1.0rem",
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
