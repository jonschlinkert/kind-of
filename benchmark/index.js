'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: false,
  fixtures: ['fixtures/*.js'],
  code: 'code/{kind-of,lib-*}.js',
  cwd: __dirname
});

suite.run();
