import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter-tight)",
          "var(--font-noto-sans-jp)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};

export default config;
