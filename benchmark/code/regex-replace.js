var re = /^\[object (\w+)\]$/;

module.exports = function typeOf(arr) {
  var val = arr[0];
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  return {}.toString.call(val)
    .toLowerCase()
    .replace(re, '$1');
};
