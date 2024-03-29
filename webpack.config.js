const PostBuild = require("apiker/dist/plugins/PostBuild");
const dotenv = require("dotenv");
const TOML = require("@iarna/toml");

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
    minimize: false,
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
    new PostBuild(__dirname, TOML, dotenv)
  ],
  resolve: {
    extensions: [".ts", ".js", ".mjs", ".json"]
  }
};
