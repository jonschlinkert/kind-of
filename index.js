var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  if (val === undefined) {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }

  if (typeof val !== 'object') {
    // here: function, symbol, string (literal), number (literal)
    return typeof val;
  }
  if (Array.isArray(val)) {
    return 'array';
  }
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(val)) {
    return 'buffer';
  }

  // here: Map, WeakMap, Set, WeakSet, Arguments or new Number(42), new String('str')
  var type = toString.call(val);
  if (type === '[object Arguments]') {
    return 'arguments';
  }

  // here: Map, WeakMap, Set, WeakSet, new Number(42), new String('str')
  return type.slice(8, -1).toLowerCase();
};
