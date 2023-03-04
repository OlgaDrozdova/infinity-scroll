const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].bundle.js",
  },
  devtool: false,
  resolve: {
    // alias: {
    // },
    modules: ["node_modules"],
    extensions: [".jsx", ".js"],
  },
  optimization: {
    minimize: true,
    runtimeChunk: "single",
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
        include: /src/,
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
