/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vert dominant (nuances dégradées)
        primary: {
          DEFAULT: '#008751',      // Vert Bénin standard
          50: '#E6F4EC',
          100: '#CCE9D9',
          200: '#99D3B3',
          300: '#66BD8D',
          400: '#33A767',
          500: '#008751',          // Base
          600: '#006C41',
          700: '#005131',
          800: '#003620',
          900: '#001B10',
        },
        // Jaune Bénin (accents)
        secondary: {
          DEFAULT: '#FCD116',
          50: '#FFF9E6',
          100: '#FEF3CC',
          200: '#FDE799',
          300: '#FCDB66',
          400: '#FBCF33',
          500: '#FCD116',
          600: '#D4AE0A',
          700: '#A88708',
          800: '#7C6005',
          900: '#503903',
        },
        // Rouge Bénin (urgences, dons)
        accent: {
          DEFAULT: '#E8112D',
          50: '#FDE8EA',
          100: '#FBD1D5',
          200: '#F7A3AB',
          300: '#F37581',
          400: '#EF4757',
          500: '#E8112D',
          600: '#C00E24',
          700: '#980B1B',
          800: '#700812',
          900: '#480409',
        },
        // Neutres
        dark: '#1E293B',
        light: '#F9FAFB',
      },
      backgroundImage: {
        // Dégradés personnalisés
        'gradient-primary': 'linear-gradient(135deg, #008751 0%, #006C41 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, #008751 0%, #33A767 100%)',
        'gradient-hero': 'linear-gradient(135deg, #003620 0%, #008751 50%, #006C41 100%)',
        'gradient-card': 'linear-gradient(to bottom right, #FFFFFF, #E6F4EC)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'], // Pour les titres
      },
    },
  },
  plugins: [],
}