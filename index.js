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

  return {}.toString.call(value).toLowerCase()
    .replace(/^\[object ([\S]+)\]$/, '$1');
};
