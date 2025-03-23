const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/script.js', // Your main JS file
  output: {
    filename: 'main.js', // Bundled JS file
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/intermediate_webdev_finalproject/', // Adjust for GitHub Pages or other deployment methods
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use your modified index.html template
      inject: 'body', // Automatically injects JS and CSS at the end of the body
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }, // Copy any assets like images or favicons
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // CSS processing
      },
    ],
  },
  mode: 'production', // Production mode for optimized output
};
