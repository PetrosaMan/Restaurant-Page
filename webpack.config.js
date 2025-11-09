// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watch } = require("fs");

module.exports = {
  mode: "development", //production 
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],    
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      scriptLoading: "defer",
      inject: false, // Prevent automatic injection of scripts
        }),
  ],
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
    },
    {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: "asset/resource",
    },
   ],
  },  
};
