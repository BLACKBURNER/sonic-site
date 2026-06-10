import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sonic-dark': '#1A1A1A',
        'sonic-gray': '#F5F5F5',
        'sonic-lime': '#C8D400',
        'sonic-lime-dark': '#a8b300',
        'sonic-accent': '#9CA3AF',
        'sonic-text-secondary': '#6B7280',
        'sonic-text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      zIndex: {
        'raised': '10',
        'sticky': '20',
        'nav-secondary': '30',
        'overlay-backdrop': '40',
        'nav-primary': '60',
        'modal': '100',
        'fullscreen': '200',
        'system': '9999',
      },
      transitionDuration: {
        'micro': '150ms',
        'standard': '200ms',
        'moderate': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'sonic': 'ease-out',
        'sonic-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
