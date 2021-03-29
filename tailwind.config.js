const triangles = require('./src/styles/plugins/triangles')

module.exports = {
  purge: [
    './dist/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    triangles,
  ],
}
