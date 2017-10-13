'use strict';

require('mocha');
var assert = require('assert');
var kindOf = require('../..');

module.exports = function() {
  describe('es6 features', function() {
    it('should work for resolved promises', function() {
      var promise = Promise.resolve(123);
      assert.strictEqual(kindOf(promise), 'promise');
    });

    it('should work for rejected promises', function() {
      var promise = Promise.reject(new Error('foo bar'));
      promise.catch(function() {});
      assert.strictEqual(kindOf(promise), 'promise');
    });

    it('should work for generator functions', function() {
      var gen = function * named() {
        return true;
      };
      assert.equal(kindOf(gen), 'generatorfunction');
    });

    it('should work for generator objects', function() {
      var gen = function * named() {
        return true;
      };
      assert.equal(kindOf(gen()), 'generator');
    });

    it('should work for template strings', function() {
      /* eslint quotes: 0 */
      var name = 'Foo';
      assert.equal(kindOf(`Welcome ${name} buddy`), 'string');
    });

    it('should work for Map', function() {
      var map = new Map();
      assert.equal(kindOf(map), 'map');
      assert.equal(kindOf(map.set), 'function');
      assert.equal(kindOf(map.get), 'function');
      assert.equal(kindOf(map.add), 'undefined');
    });

    it('should work for WeakMap', function() {
      var weakmap = new WeakMap();
      assert.equal(kindOf(weakmap), 'weakmap');
      assert.equal(kindOf(weakmap.set), 'function');
      assert.equal(kindOf(weakmap.get), 'function');
      assert.equal(kindOf(weakmap.add), 'undefined');
    });

    it('should work for Set', function() {
      var set = new Set();
      assert.equal(kindOf(set), 'set');
      assert.equal(kindOf(set.add), 'function');
      assert.equal(kindOf(set.set), 'undefined');
      assert.equal(kindOf(set.get), 'undefined');
    });

    it('should work for WeakSet', function() {
      var weakset = new WeakSet();
      assert.equal(kindOf(weakset), 'weakset');
      assert.equal(kindOf(weakset.add), 'function');
      assert.equal(kindOf(weakset.set), 'undefined');
      assert.equal(kindOf(weakset.get), 'undefined');
    });

    it('should work for Set Iterator', function() {
      var SetValuesIterator = new Set().values();
      assert.equal(kindOf(SetValuesIterator), 'setiterator');
    });
    it('should work for Map Iterator', function() {
      var MapValuesIterator = new Map().values();
      assert.equal(kindOf(MapValuesIterator), 'mapiterator');
    });
    it('should work for Array Iterator', function() {
      var ArrayEntriesIterator = [].entries();
      assert.equal(kindOf(ArrayEntriesIterator), 'arrayiterator');
    })
    it('should work for String Iterator', function() {
      var StringCharIterator = ''[Symbol.iterator]();
      assert.equal(kindOf(StringCharIterator), 'stringiterator');
    })

    it('should work for Symbol', function() {
      assert.equal(kindOf(Symbol('foo')), 'symbol');
      assert.equal(kindOf(Symbol.prototype), 'symbol');
    });

    it('should work for Int8Array', function() {
      var int8array = new Int8Array();
      assert.equal(kindOf(int8array), 'int8array');
    });

    it('should work for Uint8Array', function() {
      var uint8array = new Uint8Array();
      assert.equal(kindOf(uint8array), 'uint8array');
    });

    it('should work for Uint8ClampedArray', function() {
      var uint8clampedarray = new Uint8ClampedArray();
      assert.equal(kindOf(uint8clampedarray), 'uint8clampedarray');
    });

    it('should work for Int16Array', function() {
      var int16array = new Int16Array();
      assert.equal(kindOf(int16array), 'int16array');
    });

    it('should work for Uint16Array', function() {
      var uint16array = new Uint16Array();
      assert.equal(kindOf(uint16array), 'uint16array');
    });

    it('should work for Int32Array', function() {
      var int32array = new Int32Array();
      assert.equal(kindOf(int32array), 'int32array');
    });

    it('should work for Uint32Array', function() {
      var uint32array = new Uint32Array();
      assert.equal(kindOf(uint32array), 'uint32array');
    });

    it('should work for Float32Array', function() {
      var float32array = new Float32Array();
      assert.equal(kindOf(float32array), 'float32array');
    });

    it('should work for Float64Array', function() {
      var float64array = new Float64Array();
      assert.equal(kindOf(float64array), 'float64array');
    });
  });
};
