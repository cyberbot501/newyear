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
        yoruba: {
          gold: '#D4AF37',
          green: '#0F5132',
          red: '#B22222',
          orange: '#FF6B35',
          brown: '#8B4513',
        },
      },
    },
  },
  plugins: [],
}

