/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "Obsidian" surfaces
        ink: {
          DEFAULT: '#121212',
          deep: '#0C0C0C',
          soft: '#171717',
          card: '#1A1A1A',
        },
        // Text / ink on dark
        mist: {
          DEFAULT: '#F5F5F3',
          dim: '#A8A8A4',
          mute: '#6F6F6B',
        },
        // Structural accent
        ember: {
          DEFAULT: '#FF5A1F',
          hover: '#E24C12',
        },
        line: 'rgba(255,255,255,0.09)',
        'line-strong': 'rgba(255,255,255,0.18)',
        flare: '#241F17',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1360px',
        measure: '32rem',
      },
      backgroundImage: {
        'ink-radial':
          'radial-gradient(120% 95% at 72% 0%, #241F17 0%, #161616 48%, #121212 100%)',
        'brand-flare': 'linear-gradient(100deg, #FF4D9D 0%, #8B5CF6 50%, #22D3EE 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-16px) scale(1.03)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        drift: 'drift 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
