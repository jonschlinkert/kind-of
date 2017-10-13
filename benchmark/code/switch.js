var toString = Object.prototype.toString;

module.exports = function(val) {
  if (val === 'arguments') {
    return kindOf(arguments);
  }
  return kindOf(val);
};

function kindOf(val) {
  if (val === void 0) {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false) {
    return 'boolean';
  }

  var type = typeof val;
  if (type === 'number') {
    return 'number';
  }
  if (type === 'string') {
    return 'string';
  }
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }
  if (Array.isArray && Array.isArray(val)) {
    return 'array';
  }
  if (isBuffer(val)) {
    return 'buffer';
  }

  var name = ctorName(val);
  if (name === 'Date') {
    return 'date';
  }

  type = toString.call(val);
  switch (type) {
    // Common object types
    case '[object Object]': return 'object';
    case '[object Arguments]': return 'arguments';
    // case '[object Function]': return 'function';
    case '[object RegExp]': return 'regexp';
    case '[object Date]': return 'date';
    case '[object Error]': return 'error';
    case '[object Promise]': return 'promise';
    // case '[object GeneratorFunction]': return 'generatorfunction';

    // Set, Map, WeakSet, WeakMap, Symbol
    case '[object Set]': return 'set';
    case '[object Map]': return 'map';
    case '[object WeakSet]': return 'weakset';
    case '[object WeakMap]': return 'weakmap';
    case '[object Symbol]': return 'symbol';

    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';

    // 16-bit typed arrays
    case '[object Int16Array]': return 'int16array';
    case '[object Uint16Array]': return 'uint16array';

    // 32-bit typed arrays
    case '[object Int32Array]': return 'int32array';
    case '[object Uint32Array]': return 'uint32array';
    case '[object Float32Array]': return 'float32array';
    case '[object Float64Array]': return 'float64array';

    // 8-bit typed arrays
    case '[object Int8Array]': return 'int8array';
    case '[object Uint8Array]': return 'uint8array';
    case '[object Uint8ClampedArray]': return 'uint8clampedarray';

    default: {
      if (isGeneratorObj(val)) {
        return 'generator';
      }
      return type.slice(8, -1).split(' ').join('').toLowerCase();
    }
  }
}

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isGeneratorFn(val) {
  return ctorName(val) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}
