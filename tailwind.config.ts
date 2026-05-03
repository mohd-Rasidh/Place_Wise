import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f2742",
        ink: "#172033",
        emerald: "#0f9f6e",
        mist: "#f5f7fb",
        line: "#e6ebf2"
      },
      boxShadow: {
        soft: "0 12px 35px rgba(15, 39, 66, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
