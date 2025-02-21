/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'anchor-pattern': "url('/anchor.png')",
        'wood-plank':"url('/background-images/woodPlank.png')"
        // more can be added instead of making a .css file
      }
    },
  },
  plugins: [],
};
