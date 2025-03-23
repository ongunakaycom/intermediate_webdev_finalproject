const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Import the plugin

module.exports = {
  entry: './src/script.js', // Main JS entry point
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/intermediate_webdev_finalproject/',  // Adjust this based on your repo name
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Source HTML file
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },  // Copy assets like favicon
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Extract CSS into this file
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
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS into a separate file
          'css-loader',  // Parse CSS
        ],
      },
    ],
  },
  mode: 'production',
};
