const path = require('path');

module.exports = {
   entry: './src/matrix',
   devtool: 'inline-source-map',
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   output: {
      filename: 'matrix.js',
      path: path.resolve(__dirname, './dist'),
   },
   devServer: {
      contentBase: path.join(__dirname, './dist'),
      compress: true,
      hot: true,
   },
};
