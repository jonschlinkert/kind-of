module.exports = function typeOf(val) {
  return {}.toString.call(val).slice(8, -1).toLowerCase();
};
