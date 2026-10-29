/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dbe5f2',
          200: '#b6cae4',
          300: '#8baad3',
          400: '#5e86be',
          500: '#3e6aa8',
          600: '#2c5188',
          700: '#233f6c',
          800: '#112244',
          900: '#0b162c',
          950: '#070d1b',
        },
        gold: {
          50: '#fdfbf0',
          100: '#faf5d9',
          200: '#f4e7a8',
          300: '#edd473',
          400: '#e5be42',
          500: '#d4af37', // Royal Gold
          600: '#b78e24',
          700: '#916a1c',
          800: '#75541c',
          900: '#63461d',
          950: '#38240a',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          hover: '#20ba5a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -10px rgba(212, 175, 55, 0.25)',
        'premium': '0 20px 40px -15px rgba(11, 22, 44, 0.15)',
        'floating': '0 12px 35px -5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
