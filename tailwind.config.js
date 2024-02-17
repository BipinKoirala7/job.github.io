/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#141413",
        "secondary": "#F9F9F9",
        "first-color": '#e3dbfa',
        "second-color": '#fbe2f4',
        "third-color": '#ffe1cc',
        "fourth-color": '#d4f6ed',
        "border-color":"#383838"
      },
      plugins: [],
    }
  }
};

