const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        66: '267px',
        74: '298px',
        84: '344px'
      },
      width: {
        66: '272px'
      },
      margin: {
        4.5: '1.125rem/* 18px */'
      }
    },
    screens: {
      xs: '500px',
      '3xl': '1920px',
      ...defaultTheme.screens
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      55: '55px'
    },
    colors: {
      transparent: 'transparent',
      action: {
        50: '#E8F2FB',
        500: '#1A8DE9',
        600: '#197ACF'
      },
      brand: {
        500: '#003781'
      },
      grey: {
        50: '#FAFAFA',
        300: '#D9D9D9',
        500: '#999999',
        800: '#414141'
      },
      vibrant: {
        50: '#FAFEFF',
        100: '#EFFCFF',
        500: '#96DCFA'
      },
      success: {
        500: '#3DA556'
      },
      orange: {
        50: '#FFE8B0',
        500: '#F86200',
        700: '#CF5200'
      },
      purple: {
        500: '#8A679C'
      },
      base: {
        white: '#FFFFFF',
        black: '#000000'
      },
      opaque: {
        900: '#001A27'
      }
    },
    boxShadow: {
      sm: '0px 2px 11px -5px rgba(0, 0, 0, 0.25)',
      mobile: '0px 0px 10px rgba(14, 33, 61, 0.2)',
      menu: '0px -8px 22px rgba(0, 0, 0, 0.25)',
      none: 'none'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
