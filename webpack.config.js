const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
  entry: {
    index: "./src/js/index.js",
    post: "./src/js/post.js",
    register: "./src/js/register.js",
    write: "./src/js/write.js",
  },
  output: {
    path: __dirname + "/build",
    filename: "js/[name].js",
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
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 50
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.pug$/,
        loader: "pug-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".sass", ".scss", ".css"],
    alias: {
      components: __dirname + "/src/blocks",
      sass: __dirname + "/src/sass"
    }
  },
  devServer: {
    overlay: true,
    contentBase: './build',
    watchContentBase: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/templates/index.pug",
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/templates/post.pug",
      chunks: ["post"],
      filename: "post.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/templates/register.html",
      chunks: ["register"],
      filename: "register.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/templates/write.pug",
      chunks: ["write"],
      filename: "write.html"
    }),
  ]
};
