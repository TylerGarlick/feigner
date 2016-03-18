'use strict';

const Fs = require('fs');
const Path = require('path');

const babelConfiguration = JSON.parse(Fs.readFileSync(Path.join(__dirname, '.babelrc')));
babelConfiguration.babel = require('babel-core');

module.exports = (wallaby) => {
  return {
    files: [
      'server/**/*',
      'test/**/*',
      { pattern: 'test/**/*.tests.js', ignore: true }
    ],
    tests: [
      'test/**/*.tests.js'
    ],
    env: {
      type: 'node'
    },
    bootstrap: () => {
      require('./test/helper');
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfiguration)
    }
  }
};
