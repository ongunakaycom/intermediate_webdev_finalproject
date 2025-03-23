const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production' based on your environment
  entry: './src/script.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Assumes you have this file
    }),
  ],
  output: {
    clean: true,
    libraryTarget: 'window', // Makes the exported module available as a property on the window object
    filename: 'main.js', // Default output filename
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Applies this rule for .css files
        use: ['style-loader', 'css-loader'], // Loads and injects CSS into your bundle
      },
    ],
  },
};
