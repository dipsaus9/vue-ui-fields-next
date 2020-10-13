// eslint-disable-next-line
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./example/src"),
        "@": path.resolve(__dirname, "./example/src")
      }
    }
  }
};
