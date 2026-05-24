/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Eco-Caring Pet Identity - Primary (Sage Green)
        primary: {
          50: '#e6f7f0',
          100: '#c2ead9',
          200: '#96f6c2',
          300: '#7ad9a7',
          400: '#4dc98a',
          500: '#006a45', // Main brand color
          600: '#005234',
          700: '#1b845a',
          800: '#006c46',
          900: '#002112',
        },
        // Secondary (Blush Pink)
        secondary: {
          50: '#fff5f7',
          100: '#ffe8ed',
          200: '#ffd9e0',
          300: '#ffb1c3',
          400: '#fd9db5',
          500: '#93455c', // Main secondary
          600: '#762e44',
          700: '#793147',
          800: '#5a2335',
          900: '#3e0219',
        },
        // Tertiary (Light Wood)
        tertiary: {
          50: '#fffbff',
          100: '#fef8f2',
          200: '#f3e0bf',
          300: '#d6c5a5',
          400: '#a89679',
          500: '#675a40', // Main tertiary
          600: '#51452d',
          700: '#817357',
          800: '#3d3422',
          900: '#231a06',
        },
        // Neutral (Cream White)
        neutral: {
          50: '#ffffff',
          100: '#fbf9f4', // Main surface
          200: '#f5f3ee',
          300: '#f0eee9',
          400: '#eae8e3',
          500: '#e4e2dd',
          600: '#bec9c0',
          700: '#6e7a71',
          800: '#3e4942',
          900: '#1b1c19',
        },
        // Error colors
        error: {
          DEFAULT: '#ba1a1a',
          light: '#ffdad6',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
      spacing: {
        'xs': '4px',
        'sm': '12px',
        'md': '24px',
        'lg': '48px',
        'xl': '80px',
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'ambient': '0 4px 24px rgba(0, 106, 69, 0.08)',
        'ambient-lg': '0 8px 32px rgba(0, 106, 69, 0.12)',
      },
    },
  },
  plugins: [],
}
