/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ajout de ts,tsx
  ],
  theme: {
    extend: {
      colors: {
        primary: '#047857',
        secondary: '#f59e0b',
        dark: '#1e293b',
      }
    },
  },
  plugins: [],
}