import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7cdc7',
          300: '#a3aea3',
          400: '#8b958c',
          500: '#6b736b',
          600: '#545b54',
          700: '#454a45',
          800: '#393d39',
          900: '#313431',
        },
        garden: {
          light: '#faf9f7',
          cream: '#f5f3ef',
          sage: '#8b958c',
          moss: '#6b736b',
          leaf: '#a3aea3',
          dark: '#2d2d2d',
        },
      },
      backdropBlur: {
        glass: '20px',
      },
      backgroundImage: {
        'glass-light': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(30,30,30,0.6) 0%, rgba(20,20,20,0.3) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
