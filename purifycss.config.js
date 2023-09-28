const purify = require('purify-css');

const content = ['./src/**/*.html', './src/**/*.ts'];
const css = ['./dist/lpg/styles.css'];

const options = {
  output: './dist/lpg/purified.css',
  whitelist: ['some-class-to-keep'],
};

purify(content, css, options);