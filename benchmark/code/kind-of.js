var typeOf = require('../..');

module.exports = function(args) {
  var arg = args[0];
  // if the word "arguments" is passed from fixtures, just check args
  if (arg === 'arguments') {
    return typeOf(arguments);
  }
  return typeOf(args[0]);
};
