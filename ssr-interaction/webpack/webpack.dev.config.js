const path = require("path");

//定一个通用的路径转换方法
const resolvePath = pathstr => path.resolve(__dirname, pathstr);

module.exports = {
  mode: "development",
  entry: resolvePath("../src/client/app/index.js"),
  output: {
    filename: "index.js",
    path: resolvePath("../dist/static")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
