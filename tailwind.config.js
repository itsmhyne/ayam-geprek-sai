/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        website: {
          primary: "#FF9F0D",
          secondary: "#999966",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins-sans)", "sans-serif"],
        space_mono: ["var(--font-space-mono)", "serif"],
        great_vuibes: ["var(--font-great-vibes)", "sans"],
      },
    },
  },
  plugins: [],
};
