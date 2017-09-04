module.exports = function typeOf(arr) {
  var val = arr[0];
  return {}.toString.call(val).slice(8, -1).toLowerCase();
};
