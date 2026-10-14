/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B1630',
          deep: '#080F1F',
        },
        'deep-blue': '#15294B',
        ivory: '#F2F0E9',
        steel: {
          DEFAULT: '#8295B4',
          light: '#A8B8D0',
          dark: '#5E7090',
        },
        electric: {
          DEFAULT: '#6E91FF',
          hover: '#5A7AEF',
        },
        'border-l': '#D9DEE8',
        'border-d': '#293957',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
        prose: '720px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        label: '0.18em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'draw-line': 'drawLine 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
      },
      backgroundImage: {
        'midnight-radial':
          'radial-gradient(ellipse 80% 60% at 70% 20%, #15294B 0%, #0B1630 55%, #080F1F 100%)',
        'ivory-radial':
          'radial-gradient(ellipse 60% 50% at 30% 10%, #FFFFFF 0%, #F2F0E9 100%)',
      },
    },
  },
  plugins: [],
}
