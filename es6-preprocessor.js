'use strict';

// As we are using ts-preprocessor in jest.config.json, we must explicitly tell
// jest to use babel for js files, otherwise it will fail.

var babel = require('babel-core');

module.exports = {
  process: function (src, filename) {
    var result = babel.transform(src, {filename: filename});
    return result.code;
  }
};