const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  optimization: {
    usedExports: true, // Enables tree shaking
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            unused: true,
            dead_code: true,
          },
        },
      })
    ],
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin()
  ],
};
