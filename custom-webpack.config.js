const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin()
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
    new BrotliPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg|webp)$/i,
    }),
  ],
};
