const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point file
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match both .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // Resolve these extensions
  },
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Ensure publicPath is set
  }
};
