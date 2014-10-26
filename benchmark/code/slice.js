'use strict';

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} type
 */

module.exports = function typeOf(val) {
  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};
