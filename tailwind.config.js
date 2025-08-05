/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF',        // Modern sophisticated blue
        'secondary': '#0EA5E9',      // Electric cyan for innovation
        'accent': '#F97316',         // Warm orange for human connection
        'hero-bg': '#0F172A',        // Modern deep slate
        'text-dark': '#1E293B',      // Professional dark slate
        'white': '#ffffff',
        'surface': '#F8FAFC',        // Subtle off-white
        'neutral': '#64748B',        // Modern neutral gray
      },
      fontFamily: {
        'header': ['Karantina', 'system-ui', '-apple-system', 'sans-serif'],
        'content': ['Assistant', 'system-ui', '-apple-system', 'sans-serif'],
        'hebrew': ['Assistant', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-rtl'),
  ],
} 