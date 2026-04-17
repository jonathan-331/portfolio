import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F9F6',
        ink: '#1A1B1F',
        accent: '#377E22',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        // Override sm/xs to enforce 14px minimum
        'xs':   ['14px', { lineHeight: '1.5' }],
        'sm':   ['15px', { lineHeight: '1.6' }],
        'base': ['16px', { lineHeight: '1.7' }],
        'lg':   ['18px', { lineHeight: '1.6' }],
        'xl':   ['20px', { lineHeight: '1.5' }],
        '2xl':  ['24px', { lineHeight: '1.4' }],
        '3xl':  ['30px', { lineHeight: '1.3' }],
        '4xl':  ['36px', { lineHeight: '1.2' }],
        '5xl':  ['48px', { lineHeight: '1.1' }],
        '6xl':  ['60px', { lineHeight: '1.05' }],
        '7xl':  ['72px', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
