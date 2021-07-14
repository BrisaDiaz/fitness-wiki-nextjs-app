module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bite: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        bite: 'bite 1s ease-in-out infinite'
      },

      backgroundImage: () => ({
        'healthy-food': "url('/healthy-food-bg.jpg')",
        'healthy-burger': "url('/healthy-burger-bg.jpg')",
        'dot-pattern': "url('/dot-pattern-bg.jpg')"
      })
    }
  },
  variants: {},
  plugins: []
}
