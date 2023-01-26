const autoPreFixer = require('autoprefixer');
const cssNanoPlugin = require('cssnano');

module.exports ={
  plugins: [
    autoPreFixer,
    cssNanoPlugin({preset: 'default'})
  ]
}