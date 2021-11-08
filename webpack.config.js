const CopyPlugin = require("copy-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  target: "web",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs",
    sourceMapFilename: "index.js.map",
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new PrettierPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/shim.mjs", to: "shim.mjs" }],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".mjs", ".json"]
  }
};
