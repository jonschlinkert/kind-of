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
  // function, symbol, string (literal), number (literal), undefined, boolean
  // actually, in this case only first four
  if (typeof val !== 'object') {
    return typeof val;
  }
  if (Array.isArray(val)) {
    return 'array';
  }
  // it's faster to check them before `toString.call`-ing
  // I thought there's no need to check their type with `typeof`?
  // because /^[a-b]/ and new RegExp('^[a-b]') instanceof RegExp === true
  if (val instanceof RegExp) {
    return 'regexp';
  }
  // there's no such thing which is date but not instance of Date?
  if (val instanceof Date) {
    return 'date';
  }
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(val)) {
    return 'buffer';
  }

  // here it is some of Map, WeakMap, Set, WeakSet, Arguments,
  // or new Number(42), new String('str')
  var type = toString.call(val);
  if (type === '[object Arguments]') {
    return 'arguments';
  }

  // only if it is Map, WeakMap, Set, WeakSet, new Number(42), new String('str')
  return type.slice(8, -1).toLowerCase();
};
