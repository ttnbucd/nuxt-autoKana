const __dirname = new URL(import.meta.url).pathname.replace('webpack.config.js', '');
const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
    library: 'AutoKana',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env', {
                    modules: false
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};
export default config