const path = require('path');

module.exports = {
   entry: {
      matrix: './src/matrix.ts'
   },
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
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'matrix',
      umdNamedDefine: true
   },
   optimization: {
      minimize:true,
   }
};