let webpack = require("webpack");

module.exports = {
  context: __dirname + "/src/",
  entry: {
    main: "./js/index.js",
    post: "./js/post.js",
    register: "./js/register.js",
    write: "./js/write.js"
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
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".sass", ".scss", ".css", ".js"]
  },
  devServer: {
    overlay: true,
    watchContentBase: true,
    port: 3000
  },
  mode: "development",
  devtool: "eval"
};
