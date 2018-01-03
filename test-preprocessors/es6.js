// As we are using ts-preprocessor in jest.config.json, we must explicitly tell
// jest to use babel for js files, otherwise it will fail.

const babel = require('babel-core');

module.exports = {
  process(src, filename) {
    const result = babel.transform(src, { filename });
    return result.code;
  },
};
