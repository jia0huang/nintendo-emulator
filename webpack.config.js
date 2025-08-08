const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: {
    nintendo: "./src/index.js",
    "nintendo.min": "./src/index.js",
  },
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "nintendo",
    libraryTarget: "umd",
    umdNamedDefine: true,
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js"],
      exclude: "node_modules",
    }),
  ],
};
