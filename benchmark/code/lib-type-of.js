/**
 * https://github.com/ForbesLindesay/type-of
 */
// var typeOf = require('type-of');
var toString = Object.prototype.toString;

module.exports = function(val) {
  if (val === 'arguments') {
    return typeOf(arguments);
  }
  return typeOf(val);
};

function typeOf(val) {
  switch (toString.call(val)) {
    case '[object Function]':
      return 'function';
    case '[object Date]':
      return 'date';
    case '[object RegExp]':
      return 'regexp';
    case '[object Arguments]':
      return 'arguments';
    case '[object Array]':
      return 'array';
    case '[object String]':
      return 'string';
  }

  if (typeof val == 'object' && val && typeof val.length == 'number') {
    try {
      if (typeof val.callee == 'function') return 'arguments';
    } catch (ex) {
      if (ex instanceof TypeError) {
        return 'arguments';
      }
    }
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val && val.nodeType === 1) return 'element';
  if (val === Object(val)) return 'object';

  return typeof val;
}
