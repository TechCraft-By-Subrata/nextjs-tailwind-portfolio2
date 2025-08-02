module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // blue-600
        accent: "#f59e42", // orange-400
        background: "#f8fafc", // slate-50
        surface: "#fff",
        text: "#0f172a", // slate-900
        muted: "#64748b", // slate-500
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
