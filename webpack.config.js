const path = require("path");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve("dist")
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },

      {
        test: /\.scss$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            "css-loader",
            "sass-loader"
          ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'

    }),
    new HtmlWebpackPlugin({
      template: 'about.html',
      filename: 'about.html'
    })
    
  ]
};
