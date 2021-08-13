module.exports = {
  important: true,
  purge: ['./src/**/**.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '53': '53%',
        '45': '45%',
        '30': '30%',
        '88': '88%',
        '11': '11%'
      },
      minWidth: {
        '30': '30%',
        '53': '53%',
        '48': '48.8%'
       },
       height: {
        sm: '90%',
        '95': '95vh'
       },
       borderWidth: {
        '0.5': '0.5px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
