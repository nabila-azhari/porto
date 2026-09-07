/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#74db26',
          400: '#8cf03a',
          500: '#74db26',
          600: '#5ebb18',
          700: '#489410',
          glow: 'rgba(116, 219, 38, 0.4)',
        },
        dark: {
          950: '#070a0e',
          900: '#0b0f15',
          850: '#0f141d',
          800: '#141b26',
          700: '#1b2434',
          600: '#232f44',
          pill: '#212734',
        },
        surface: {
          card: '#111622',
          'card-light': '#ffffff',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-lime': 'rgba(116, 219, 38, 0.4)',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}

