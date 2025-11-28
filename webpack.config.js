// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { watch } = require("fs");

module.exports = {
  mode: "development", //"production", 
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    static: './dist',
    watchFiles: ["./src/template.html"], 
    port: 8080, // default port
    open: true, // opens browser automatically   
    hot: true,  // enables hot module replacement
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      scriptLoading: "defer"
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
