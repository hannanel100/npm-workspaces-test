const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: { import: "./src/index.js" },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "components.bundle.min.js",
    library: "fstrComponents",
    libraryTarget: "umd",
    clean: true,
  },
};
