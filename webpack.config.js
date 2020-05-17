const path = require('path');

module.exports = {
  mode: 'development',
  entry:"./src/index.tsx",
  devtool: "inline-source-map",
  output:{
    filename:"bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  watch:true,
  resolve:{
    extensions: [".ts", ".tsx", ".js"]
  }
}
