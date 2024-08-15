const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "https": require.resolve("https-browserify"),
      "assert": require.resolve("assert/"),
      "url": require.resolve("url/"),
      "constants": require.resolve("constants-browserify"),
    }
  },
};
