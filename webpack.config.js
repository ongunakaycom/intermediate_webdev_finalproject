const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/script.js',  // Main JS entry point
  output: {
    filename: 'script.js',  // Output JavaScript file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    publicPath: '/',  // Ensure this points to the correct root for deployment
  },
  plugins: [
    // HTML generation
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Source HTML template file
      favicon: './src/assets/favicon.ico',  // Automatically inject favicon
    }),
    
    // Copy static assets like images to the dist folder
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },  // Copy assets (like favicon) to the dist folder
      ],
    }),

    // Extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: 'style.css',  // Extract CSS into this file
    }),
  ],
  module: {
    rules: [
      // JavaScript transpilation with Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // CSS handling with MiniCssExtractPlugin
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS to a separate file
          'css-loader',  // Parse CSS
        ],
      },
    ],
  },
  mode: 'production',  // Change to 'development' for development mode
};
