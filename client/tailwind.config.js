/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Your Sans Font", "system-ui"],
        serif: ["Your Serif Font", "Georgia"],
        mono: ["Your Mono Font", "Menlo"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        goldenYellow: "#FFC632",
      },
    },
  },
  plugins: [],
};
