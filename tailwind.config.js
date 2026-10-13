/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101F3D',
          rich: '#172D52',
          deep: '#0B1628',
        },
        brand: {
          DEFAULT: '#4169A8',
          hover: '#35588F',
          light: '#E8EFF9',
        },
        cream: '#F7F6F2',
        slate: {
          muted: '#66748A',
        },
        body: '#4A5568',
        border: '#E2E8F0',
        accent: {
          DEFAULT: '#4169A8',
          hover: '#35588F',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #101F3D 0%, #172D52 100%)',
        'navy-radial': 'radial-gradient(ellipse at top right, #172D52 0%, #101F3D 50%, #0B1628 100%)',
      },
    },
  },
  plugins: [],
}
