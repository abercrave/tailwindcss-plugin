const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.triangle-down': {
      position: 'relative',
    },
    '.triangle-down::after': {
      borderColor: 'transparent transparent #fff #fff',
      border: '1em solid #fff',
      bottom: '-2em',
      boxShadow: '-3px 4px 4px 0 rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
      content: '""',
      height: '0',
      left: '50%',
      marginLeft: '-0.5em',
      position: 'absolute',
      transformOrigin: '0 0',
      transform: 'rotate(-45deg)',
      width: '0',
    }
  }

  addUtilities(newUtilities)
})
