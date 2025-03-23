const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for deployment
  entry: './src/script.js', // Adjust to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico)$/i, // Match image files
        type: 'asset/resource', // Webpack will move these files to the `/dist` folder
      },
      {
        test: /\.css$/i, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Copy and process your HTML file into `/dist`
    }),
  ],
};
