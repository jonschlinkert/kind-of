'use strict';

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `value`
 * @return {*}
 */

module.exports = function kindOf(value) {
  if (value === null) {
    return 'null';
  }

  if (value === undefined) {
    return 'undefined';
  }

  if (typeof value !== 'object') {
    return typeof value;
  }

  return {}.toString.call(value)
    .slice(8, -1).toLowerCase();
};
