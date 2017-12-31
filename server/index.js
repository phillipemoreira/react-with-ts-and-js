/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const { resolve } = require('path');
const argv = require('minimist')(process.argv.slice(2));

const app = express();

// serving build folder
app.use('/', express.static(resolve(process.cwd(), 'build')));

// get the intended port number
const port = argv.port || process.env.PORT || 4000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, 'localhost');
});
