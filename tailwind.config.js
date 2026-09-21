/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paoWine: {
          50: '#FAF0F0',
          100: '#F5DCDC',
          200: '#EAB8B8',
          500: '#A31C1C',
          600: '#940F0F',
          700: '#8B0000', // Core wine
          800: '#670000', // Deep wine
          900: '#420000',
        },
        paoGold: {
          50: '#FFFDF5',
          100: '#FCF7E6',
          200: '#F5E6B8',
          400: '#E2C26E',
          500: '#D4AF37', // Accent gold
          600: '#B89428',
          700: '#8C6F1B',
        },
        paoSand: {
          50: '#FFFDF9',
          100: '#FAF7F2', // Soft off-white background
          200: '#F3EDDF',
          300: '#E5DAC4',
          400: '#C7B99D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      boxShadow: {
        'soft-xl': '0 20px 25px -5px rgba(139, 0, 0, 0.08), 0 8px 10px -6px rgba(139, 0, 0, 0.04)',
        'wine-glow': '0 10px 25px -5px rgba(139, 0, 0, 0.35)',
        'gold-glow': '0 10px 25px -5px rgba(212, 175, 55, 0.35)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'slideUp': 'slideUp 0.3s ease-out forwards',
        'pulseSlow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
