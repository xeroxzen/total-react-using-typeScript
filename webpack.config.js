const path = require('path');

module.exports = {
  entry:"./src/index.tsx",
  output:{
    filename:"bundle.js",
    path: path.resolve(__dirname__, 'dist')
  }
}
