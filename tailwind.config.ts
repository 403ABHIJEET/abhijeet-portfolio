import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // "./src/**/*.{ts,tsx}", // uncomment if you use a src/ folder
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f1f3d",
        gold: "#c9a24b",
        ivory: "#faf7f0",
        chalk: "#F5F1E8", // use your actual background color
        ink: "#111111",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;