const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].bundle.js",
  },
  resolve: {
    // alias: {
    // },
    modules: ["node_modules"],
    extensions: [".jsx", ".js"],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: [["import", { libraryName: "antd", style: true }]],
        },
        include: /src/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
};
