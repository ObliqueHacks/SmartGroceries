/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      colors: {
        background: {
          100: "#FEFEFE",
          200: "#FDFEFE",
          300: "#FBFEFE",
          400: "#FAFDFD",
          500: "#F9FCFD",
          600: "#B6CED9",
          700: "#7D9FB6",
          800: "#4F7392",
          900: "#2F5279",
        },

        primary: "#FD5E53",
        secondary: "#B0EACD",
        third: "#21BF73",
        fourth: "#191D28",
      },

      backgroundImage: {
        "landing-photo": "url(/assets/landingpic-removebg.png)",
        "sale-photo-1": "url(/assets/sale1.jpg)",
        "nutrient-profile-bg": "url(/assets/vegetablesprofile.jpg)",
      },

      boxShadow: {
        "custom-medium-red":
          "0 8px 8px -3px rgba(254, 226, 226, 0.7), 0 4px 6px -2px rgba(254, 226, 226, 0.7)",
        "custom-green":
          "0 8px 8px -3px rgba(33, 191, 115, 0.7), 0 4px 6px -2px rgba(33, 191, 115, 0.7)",
      },

      gridTemplateColumns: {
        "basic-1": "auto 400px",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
