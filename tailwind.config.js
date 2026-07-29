/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        win: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#030712',
        },
        indigo: {
          950: '#090d16',
        },
        gold: {
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(3,7,18,0.98) 100%)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.35)' },
          '50%': { boxShadow: '0 0 35px rgba(99, 102, 241, 0.55)' }
        }
      },
      animation: {
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
