'use strict';

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} type
 */

var re = /^\[object (\S+)\]$/;

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

  var type = re.exec(toString.call(val));
  return type[1].toLowerCase();
};
