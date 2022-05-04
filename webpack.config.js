const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, options) => {
  const isProdaction = options.mode === 'prodaction';
  const config = {
    mode: isProdaction ? 'prodaction' : 'development',
    entry: ['./index.js', './src/sass/index.scss'],
    devtool: 'source-map',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js'
    },
    plugins: [new HtmlWebpackPlugin(), new ESLintPlugin()],
    module: {
      rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }, ],
    },
  }
  return config;
}
