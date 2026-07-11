/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm amber accent — premium, not generic
        accent: {
          50: '#fff8eb',
          100: '#ffefc6',
          200: '#ffdd88',
          300: '#ffc447',
          400: '#ffab1f',
          500: '#f88606',
          600: '#e56a02',
          700: '#bd4e06',
          800: '#983e0c',
          900: '#7a3410',
          950: '#461a02',
        },
        ink: {
          50: '#f6f7f9',
          100: '#ebedf2',
          200: '#d3d8e2',
          300: '#adb6c9',
          400: '#808eac',
          500: '#5f6f92',
          600: '#4b5878',
          700: '#3e4862',
          800: '#363e54',
          900: '#0f1422',
          950: '#080b14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.5rem', sm: '2rem', lg: '2.5rem' },
        screens: { '2xl': '1200px' },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-dot': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 1.2s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'bounce-dot': 'bounce-dot 1.4s ease-in-out infinite both',
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, rgba(15,20,34,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,20,34,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
