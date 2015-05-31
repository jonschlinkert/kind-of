'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: false,
  fixtures: ['fixtures/*.js', '!**/fixtures/gen*'],
  add: 'code/{current,lib-*}.js',
  cwd: __dirname
});

suite.run();
