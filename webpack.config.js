const PrettierPlugin = require("prettier-webpack-plugin");
const PostBuild = require("./scripts/PostBuild");

module.exports = {
  entry: "./src/index.js",
  target: "node",
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
    new PostBuild(),
    new PrettierPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js", ".mjs", ".json"]
  }
};
