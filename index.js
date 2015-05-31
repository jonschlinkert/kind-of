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
    return typeof val;
  }
  if (Array.isArray && Array.isArray(val)) {
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

  var type = toString.call(val);

  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Date]') {
    return 'date';
  }

  // here: Map, WeakMap, Set, WeakSet, new Number(42), new String('str')
  return type.slice(8, -1).toLowerCase();
};
