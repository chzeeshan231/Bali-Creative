/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#EBE1D2',
          300: '#DDD0BC',
          400: '#CBBBA2',
          500: '#B8A68B',
        },
        palm: {
          50: '#EDF6F3',
          100: '#D6ECE4',
          200: '#B0DBCB',
          500: '#1C6B56',
          600: '#145343',
          700: '#0E3D31',
          800: '#0A2C23',
          900: '#061E17',
          950: '#03120E',
        },
        clay: {
          50: '#FCF4EF',
          100: '#F8E6DD',
          200: '#F0C9B6',
          400: '#DE855C',
          500: '#C8653B',
          600: '#A74E2A',
          700: '#843C20',
        },
        gold: {
          300: '#F3D49B',
          400: '#E4BD7A',
          500: '#CCA15C',
          600: '#A77F3C',
        },
        ink: {
          DEFAULT: '#141716',
          muted: '#3E4742',
          subtle: '#6A7570',
          faint: '#9BA6A0',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(10, 44, 35, 0.04), 0 8px 24px -6px rgba(10, 44, 35, 0.06)',
        soft: '0 12px 36px -10px rgba(10, 44, 35, 0.12)',
        lift: '0 24px 60px -15px rgba(10, 44, 35, 0.22)',
        glow: '0 0 45px -10px rgba(200, 101, 59, 0.35)',
        'palm-glow': '0 0 50px -12px rgba(28, 107, 86, 0.35)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
