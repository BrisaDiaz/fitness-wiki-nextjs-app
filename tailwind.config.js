module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' }
        },
        appearLeft: {
          '0%': { transform: 'translateX(-384px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        appearRight: {
          '0%': { transform: 'translateX(384px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        beat: 'beat  1s ease-in-out infinite',
        appearLeft: 'appearLeft 1s linear  ',
        appearRight: 'appearRight 1s linear  '
      },

      backgroundImage: () => ({
        'healthy-food': "url('/healthy-food-bg.jpg')",
        'healthy-burger': "url('/healthy-burger-bg.jpg')",
        'dot-pattern': "url('/dot-pattern-bg.jpg')"
      })
    }
  },
  variants: {
    extend: {
      // ...
      animation: ['hover', 'focus'],
      zIndex: ['hover', 'active']
    }
  },
  plugins: []
}
