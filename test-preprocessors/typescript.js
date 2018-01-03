const typescript = require('typescript');

module.exports = {
  process(src, filename) {
    const result = typescript.transform(src, { filename });
    return result.code;
  },
};
