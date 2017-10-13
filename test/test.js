'use strict';

require('mocha');
var assert = require('assert');
var kindOf = require('..');

var version = process.version.match(/^v(\d+)\.(\d+)\.(\d+)/);
var major = version[1];

describe('kindOf', function() {
  /* eslint no-new-wrappers: 0 */

  describe('null and undefined', function() {
    it('should work for undefined', function() {
      assert.equal(kindOf(undefined), 'undefined');
    });

    it('should work for null', function() {
      assert.equal(kindOf(null), 'null');
    });
  });

  describe('primitives', function() {
    it('should work for booleans', function() {
      assert.equal(kindOf(true), 'boolean');
      assert.equal(kindOf(false), 'boolean');
      assert.equal(kindOf(new Boolean(true)), 'boolean');
    });

    it('should work for numbers', function() {
      assert.equal(kindOf(42), 'number');
      assert.equal(kindOf(new Number(42)), 'number');
    });

    it('should work for strings', function() {
      assert.equal(kindOf('str'), 'string');
      assert.equal(kindOf(new String('str')), 'string');
    });
  });

  describe('objects', function() {
    it('should work for arguments', function() {
      (function() {
        assert.equal(kindOf(arguments), 'arguments');
      })();
    });

    it('should work for buffers', function() {
      assert.equal(kindOf(new Buffer('')), 'buffer');
    });

    it('should work for objects', function() {
      function Test() {}
      var instance = new Test();
      var literal = {};
      var createdNull = Object.create(null);
      var createdObj = Object.create({});

      assert.equal(kindOf(instance), 'object');
      assert.equal(kindOf(literal), 'object');
      assert.equal(kindOf(createdNull), 'object');
      assert.equal(kindOf(createdObj), 'object');
    });

    it('should work for dates', function() {
      assert.equal(kindOf(new Date()), 'date');
    });

    it('should work for arrays', function() {
      /* eslint no-array-constructor: 0 */
      assert.equal(kindOf([]), 'array');
      assert.equal(kindOf([1, 2, 3]), 'array');
      assert.equal(kindOf(new Array()), 'array');
    });

    it('should work for regular expressions', function() {
      assert.equal(kindOf(/./), 'regexp');
      assert.equal(kindOf(new RegExp('^foo$')), 'regexp');
    });

    it('should work for functions', function() {
      /* eslint no-new-func: 0 */
      assert.equal(kindOf(function() {}), 'function');
      assert.equal(kindOf(new Function()), 'function');
    });

    it('should work for Errors', function() {
      assert.equal(kindOf(new Error('')), 'error');
    });
  });

  if (major > 5) {
    require('./es6')();
  }
});
