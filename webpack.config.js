module.exports = {
  mode: 'development', // Use 'production' for a production-ready build
  entry: './src/script.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Handles CSS files
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/i, // Handles assets
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use your source HTML template
    }),
  ],
};
