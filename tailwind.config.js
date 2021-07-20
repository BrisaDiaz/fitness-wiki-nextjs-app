module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bite: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' }
        },
        appearLeft: {
          '0%': { letf: '-15rem' },
          '100%': { letf: '0' }
        },
        hiddeLeft: {
          '0%': { letf: '0' },
          '100%': { letf: '-15rem' }
        }
      },
      animation: {
        bite: 'bite 1s ease-in-out infinite',
        appearLeft: 'appearLeft 0.5s ease 1',
        hiddeLeft: 'hiddeLeft 0.5s ease 1'
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
