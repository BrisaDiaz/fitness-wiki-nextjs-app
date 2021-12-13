module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10'
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        mdGreen:
          '0 4px 6px -1px rgb(34 128 90 / 27%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none'
      },
      minWidth: {
        xs: '360px'
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' }
        },
        appearLeft: {
          '0%': { transform: 'translateX(-384px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideBottom: {
          '0%': { transform: 'translateY(384px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        infiniteXSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(400%)' }
        }
      },
      animation: {
        beat: 'beat  1s ease-in-out infinite',
        appearLeft: 'appearLeft 1s linear  ',
        slideBottom: 'slideBottom 1s linear  ',
        infiniteXSlide: 'infiniteXSlide 1.5s linear infinite  '
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
      zIndex: ['hover', 'active'],
      backdropBlur: ['hover', 'focus'],
      display: ['group-hover']
    }
  },
  plugins: []
}
