module.exports = function typeOf(arr) {
  var val = arr[0];
  if (val === null) return 'null';

  if (val === undefined) {
    return 'undefined';
  }

  var type = typeof val;
  switch (type) {
    case "string":
    case "number":
    case "boolean":
      return type;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};
