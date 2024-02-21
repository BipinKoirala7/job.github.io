/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141413",
        secondary: "#F9F9F9",
        "first-color": "#e3dbfa",
        "second-color": "#fbe2f4",
        "third-color": "#ffe1cc",
        "fourth-color": "#d4f6ed",
        "fifth-color": "#DFF3FE",
        "sixth-color": "#ECEFF4",
        "border-color": "#383838",
        "border-color-2":"#D7D7D7",
        "light-text": "#82858A",
      },
      gridTemplateColumns: {
        "main-navbar-grid": "1fr 5fr 1fr",
        "job-filter-grid-column": "1fr 1fr 1fr 1fr 1.5fr",
      },
      gridTemplateRows: {
        "app-gird": "1fr 8fr",
        "job-filter-gird-row": "1fr auto",
      },
      plugins: [],
    },
  },
};
