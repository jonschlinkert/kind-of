/**
 * http://github.com/CodingFu/typeof
 */
// var typeOf = require('typeof');
var toString = Object.prototype.toString;

module.exports = function(val) {
  if (val === 'arguments') {
    return typeOf(arguments);
  }
  return typeOf(val);
};

function typeOf(object) {
  var type = typeof object;
  if (type === 'undefined') {
    return 'undefined';
  }
  if (object) {
    type = object.constructor.name;
  } else if (type === 'object') {
    type = toString.call(object).slice(8, -1);
  }
  return type.toLowerCase();
}
