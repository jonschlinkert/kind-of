'use strict';

var path = require('path');
var suite = require('benchmarked');
var write = require('write');

suite.run({
  fixtures: 'fixtures/*.js',
  code: 'code/{kind-of,lib-*}.js'
})
  .then(function(stats) {
    write.sync(path.join(__dirname, 'stats.json'), JSON.stringify(stats, null, 2))
    write.sync(path.join(__dirname, 'stats.md'), suite.render(stats));
  })
  .catch(console.error);
