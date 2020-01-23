const path = require('path');

module.exports = {
  entry: './src/matrix.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'matrix.js',
    path: path.resolve(__dirname, 'dist'),
  },
};