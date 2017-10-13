var re = /^\[object (\w+)\]$/;

module.exports = function typeOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  var m = re.exec({}.toString.call(val));
  return m[1].toLowerCase();
};
