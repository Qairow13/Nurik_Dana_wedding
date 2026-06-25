/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf6ec',
          100: '#f5ead0',
          200: '#ecd8a8',
          300: '#e0c179',
          400: '#d4a94f',
          500: '#c4933a',
          600: '#a8762c',
          700: '#855a24',
          800: '#6b4823',
          900: '#5a3c20',
        },
        cream: {
          50: '#fffdf8',
          100: '#fbf6ea',
          200: '#f6ecd6',
          300: '#eedcb6',
        },
        twogis: {
          DEFAULT: '#4F7A3D',
          dark: '#466B36',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a94f 0%, #ecd8a8 50%, #c4933a 100%)',
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-in-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
