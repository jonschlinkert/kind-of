var typeOf = require('../..');

module.exports = function(val) {
  if (val === 'arguments') {
    return typeOf(arguments);
  }
  return typeOf(val);
};
