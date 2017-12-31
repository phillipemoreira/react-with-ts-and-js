const express = require('express');
const { resolve } = require('path');

const app = express();

app.use('/', express.static(resolve(process.cwd(), 'build')));

app.listen(7000, () => {
  console.log('Example app listening on port 7000!');
});
