const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    // エントリポイントから出力するバンドルファイル以外のファイル名を指定する
    // Dynamic Import用のバンドルファイルなどは`filename`ではなく、こちらが敵用される
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};
