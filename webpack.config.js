let webpack = require("webpack");

module.exports = {
  context: __dirname + "/src/",
  entry: {
    main: "./js/index.js",
    post: "./js/post.js"
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".sass", ".css", ".js"]
  },
  devServer: {
    overlay: true,
    watchContentBase: true
  },
  mode: "development",
  devtool: "eval"
};
