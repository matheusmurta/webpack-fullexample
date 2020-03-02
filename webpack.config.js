const path = require("path");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {

  optimization: {
         splitChunks: {
         chunks: 'all',
       },
      },

 

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
  filename: '[name].[chunkhash].bundle.js',
  chunkFilename: '[name].[chunkhash].bundle.js',
  publicPath: '/',
  //;publicPath: './', for node modules 
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
            "sass-loader",
            'postcss-sass-loader'
          ]
      }
    ]
  },

  plugins: [


    new MomentLocalesPlugin({
      localesToKeep: ['pt-br'],
  }),
   
    //new BundleAnalyzerPlugin(),
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
