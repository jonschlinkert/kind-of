(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.index = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var isBuffer = require('is-buffer');
var toString = Object.prototype.toString;

// Prototype-less object (so lookups don't need to go up the prototype chain)
var typeMap = Object.create(null);
typeMap['[object RegExp]'] =  'regexp';
typeMap['[object Date]'] =  'date';
typeMap['[object Arguments]'] =  'arguments';

// es6 =  Map; WeakMap; Set; WeakSet
typeMap['[object Set]'] =  'set';
typeMap['[object WeakSet]'] =  'weakset';
typeMap['[object Map]'] =  'map';
typeMap['[object WeakMap]'] =  'weakmap';
typeMap['[object Symbol]'] =  'symbol';

// typed arrays
typeMap['[object Int8Array]'] =  'int8array';
typeMap['[object Uint8Array]'] =  'uint8array';
typeMap['[object Uint8ClampedArray]'] =  'uint8clampedarray';
typeMap['[object Int16Array]'] =  'int16array';
typeMap['[object Uint16Array]'] =  'uint16array';
typeMap['[object Int32Array]'] =  'int32array';
typeMap['[object Uint32Array]'] =  'uint32array';
typeMap['[object Float32Array]'] =  'float32array';
typeMap['[object Float64Array]'] =  'float64array';

// structured data
typeMap['[object ArrayBuffer]'] =  'arraybuffer';
typeMap['[object DataView]'] =  'dataview';


/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // buffer
  if (typeof Buffer !== 'undefined' && isBuffer(val)) {
    return 'buffer';
  }

  // other objects
  var type = toString.call(val);

  if (typeMap[type]) {
    return typeMap[type];
  }

  // must be a plain object
  return 'object';
};

},{"is-buffer":2}],2:[function(require,module,exports){
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */

module.exports = function (obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

},{}]},{},[1])(1)
});