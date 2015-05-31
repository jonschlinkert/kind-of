/*!
 * kind-of <https://github.com/jonschlinkert/kind-of>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

/* deps: mocha */
var kindOf = require('./');
require('should');

var version = process.version.match(/^.(\d+)\.(\d+)/);
var major = version[1];
var minor = version[2];

describe('kindOf', function () {
  describe('null and undefined', function () {
    it('should work for undefined', function () {
      kindOf(undefined).should.equal('undefined');
    });

    it('should work for null', function () {
      kindOf(null).should.equal('null');
    });
  });

  describe('primitives', function () {
    it('should work for booleans', function () {
      kindOf(true).should.equal('boolean');
      kindOf(false).should.equal('boolean');
      kindOf(new Boolean(true)).should.equal('boolean');
    });

    it('should work for numbers', function () {
      kindOf(42).should.equal('number');
      kindOf(new Number(42)).should.equal('number');
    });

    it('should work for strings', function () {
      kindOf('str').should.equal('string');
      kindOf(new String('str')).should.equal('string');
    });
  });

  describe('objects', function () {
    it('should work for arguments', function () {
      (function () {
      kindOf(arguments).should.equal('arguments');
        return;
      })();
    });

    it('should work for buffers', function () {
      kindOf(new Buffer('')).should.equal('buffer');
    });

    it('should work for objects', function () {
      function Test() {}
      var instance = new Test();
      var literal = {};
      var create = Object.create(null);

      kindOf(instance).should.equal('object');
      kindOf(literal).should.equal('object');
      kindOf(create).should.equal('object');
    });

    it('should work for dates', function () {
      kindOf(new Date()).should.equal('date');
    });

    it('should work for arrays', function () {
      kindOf([]).should.equal('array');
      kindOf([1, 2, 3]).should.equal('array');
      kindOf(new Array()).should.equal('array');
    });

    it('should work for regular expressions', function () {
      kindOf(/[\s\S]+/).should.equal('regexp');
      kindOf(new RegExp('^' + 'foo$')).should.equal('regexp');
    });

    it('should work for functions', function () {
      kindOf(function () {}).should.equal('function');
      kindOf(new Function()).should.equal('function');
    });
  });
  if (major > 0 || minor > 11) {
    describe('es6 features', function () {
      // it('should work for generators', function () {
      //   var gen = function * named() {return true;};
      //   kindOf(gen).should.equal('function');
      // });

      // it('should work for template strings', function () {
      //   var str = `Welcome buddy`;
      //   kindOf(str).should.equal('string');
      // });

      it('should work for Map', function () {
        var map = new Map();
        kindOf(map).should.equal('map');
        kindOf(map.set).should.equal('function');
        kindOf(map.get).should.equal('function');
        kindOf(map.add).should.equal('undefined');
      });

      it('should work for WeakMap', function () {
        var weakmap = new WeakMap();
        kindOf(weakmap).should.equal('weakmap');
        kindOf(weakmap.set).should.equal('function');
        kindOf(weakmap.get).should.equal('function');
        kindOf(weakmap.add).should.equal('undefined');
      });

      it('should work for Set', function () {
        var set = new Set();
        kindOf(set).should.equal('set');
        kindOf(set.add).should.equal('function');
        kindOf(set.set).should.equal('undefined');
        kindOf(set.get).should.equal('undefined');
      });

      it('should work for WeakSet', function () {
        var weakset = new WeakSet();
        kindOf(weakset).should.equal('weakset');
        kindOf(weakset.add).should.equal('function');
        kindOf(weakset.set).should.equal('undefined');
        kindOf(weakset.get).should.equal('undefined');
      });

      it('should work for Symbol', function () {
        kindOf(Symbol('foo')).should.equal('symbol');
        kindOf(Symbol.prototype).should.equal('object');
      });
    });
  }
});
