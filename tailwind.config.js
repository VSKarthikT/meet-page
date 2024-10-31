/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./starter-code/index.html"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        cyan600: "#4D96A9",
        cyan300: "#8FE3F9",
        Purple600: "#855FB1",
        Purple300: "#D9B8FF",
        slate900: "#28283D",
        slate600: "#87879D",
        slate300: "#D1D1DF",
      },
      fontSize: {
        preset1: [
          "4rem",
          {
            lineHeight: "4.4rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        preset1tab: [
          "3rem",
          {
            lineHeight: "3.3rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        preset1mob: [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        preset2: [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        preset2tab: [
          "2.25rem",
          {
            lineHeight: "2.475rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        preset2mob: [
          "2rem",
          {
            lineHeight: "2.2rem",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        preset3: [
          "1rem",
          {
            lineHeight: "1.1rem",
            letterSpacing: "0.25em",
            fontWeight: "400",
          },
        ],
        preset3tab: [
          "0.875rem",
          {
            lineHeight: "0.9625rem",
            letterSpacing: "0.25em",
            fontWeight: "400",
          },
        ],
        preset3mob: [
          "0.75rem",
          {
            lineHeight: "0.825rem",
            letterSpacing: "0.25em",
            fontWeight: "400",
          },
        ],
        preset4: [
          "1.125rem",
          {
            lineHeight: "1.6875rem",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        preset4tab: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        preset5: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
