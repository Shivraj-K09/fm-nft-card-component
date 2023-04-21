/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-bg-color": "hsl(217, 54%, 11%)",
        "card-bg-color": "hsl(216, 50%, 16%)",
        // "hr-line": "hsl(215, 32%, 27%)",
        "secondary-bg-color": "hsl(178, 100%, 50%)",
      },
      textColor: {
        "heading-text-color": "hsl(0, 0%, 100%)",
        "amount-color": "hsl(178, 100%, 50%)",
        "time-color": "hsl(215, 51%, 70%)",
        "hr-line": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
