# kind-of [![NPM version](https://badge.fury.io/js/kind-of.svg)](http://badge.fury.io/js/kind-of)  [![Build Status](https://travis-ci.org/jonschlinkert/kind-of.svg)](https://travis-ci.org/jonschlinkert/kind-of) 

> Get the native type of a value.

## Install with [npm](npmjs.org)

```bash
npm i kind-of --save
```

## Usage
> es5, browser and es6 ready

```js
var kindOf = require('kind-of');

kindOf(undefined);
//=> 'undefined'

kindOf(null);
//=> 'null'

kindOf(true);
//=> 'boolean'

kindOf(false);
//=> 'boolean'

kindOf(new Boolean(true));
//=> 'boolean'

kindOf(new Buffer(''));
//=> 'buffer'

kindOf(42);
//=> 'number'

kindOf(new Number(42));
//=> 'number'

kindOf('str');
//=> 'string'

kindOf(new String('str'));
//=> 'string'

kindOf(arguments);
//=> 'arguments'

kindOf({});
//=> 'object'

kindOf(Object.create(null));
//=> 'object'

kindOf(new Test());
//=> 'object'

kindOf(new Date());
//=> 'date'

kindOf([]);
//=> 'array'

kindOf([1, 2, 3]);
//=> 'array'

kindOf(new Array());
//=> 'array'

kindOf(/[\s\S]+/);
//=> 'regexp'

kindOf(new RegExp('^' + 'foo$'));
//=> 'regexp'

kindOf(function () {});
//=> 'function'

kindOf(function * () {});
//=> 'function'

kindOf(new Function());
//=> 'function'

kindOf(new Map());
//=> 'map'

kindOf(new WeakMap());
//=> 'weakmap'

kindOf(new Set());
//=> 'set'

kindOf(new WeakSet());
//=> 'weakset'

kindOf(Symbol('str'));
//=> 'symbol'
```


## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Benchmarks

Benchmarked against [typeof](http://github.com/CodingFu/typeof) and [type-of](https://github.com/ForbesLindesay/type-of).  
It is slower for es6 features `Map`, `WeakMap`, `Set` and `WeakSet`.

```bash
#1: arguments 
  current x 2,327,138 ops/sec ±1.20% (97 runs sampled)  result: "arguments"
  lib-type-of x 1,871,495 ops/sec ±0.81% (100 runs sampled)  result: "arguments"
  lib-typeof x 4,013,167 ops/sec ±0.68% (99 runs sampled)  result: "object"

  fastest is lib-typeof
#2: array 
  current x 9,146,080 ops/sec ±1.35% (88 runs sampled)  result: "array"
  lib-type-of x 942,100 ops/sec ±3.14% (90 runs sampled)  result: "array"
  lib-typeof x 3,967,518 ops/sec ±6.08% (86 runs sampled)  result: "array"

  fastest is current
#3: boolean 
  current x 9,848,075 ops/sec ±5.48% (81 runs sampled)  result: "boolean"
  lib-type-of x 1,207,944 ops/sec ±3.74% (85 runs sampled)  result: "boolean"
  lib-typeof x 3,116,576 ops/sec ±3.68% (86 runs sampled)  result: "boolean"

  fastest is current
#4: buffer 
  current x 8,083,062 ops/sec ±1.54% (91 runs sampled)  result: "buffer"
  lib-type-of x 1,362,461 ops/sec ±1.68% (93 runs sampled)  result: "object"
  lib-typeof x 3,185,269 ops/sec ±7.35% (76 runs sampled)  result: "buffer"

  fastest is current
#5: date 
  current x 5,312,490 ops/sec ±3.55% (84 runs sampled)  result: "date"
  lib-type-of x 2,227,905 ops/sec ±5.39% (88 runs sampled)  result: "date"
  lib-typeof x 3,861,570 ops/sec ±2.16% (91 runs sampled)  result: "date"

  fastest is current
#6: function 
  current x 3,714,009 ops/sec ±2.50% (89 runs sampled)  result: "function"
  lib-type-of x 2,020,856 ops/sec ±3.46% (85 runs sampled)  result: "function"
  lib-typeof x 3,902,688 ops/sec ±1.70% (91 runs sampled)  result: "function"

  fastest is current
#7: generator 
  current x 4,180,332 ops/sec ±1.30% (95 runs sampled)  result: "function"
  lib-type-of x 2,292,606 ops/sec ±1.33% (96 runs sampled)  result: "function"
  lib-typeof x 3,423,463 ops/sec ±0.94% (91 runs sampled)  result: "generatorfunction"

  fastest is current
#8: map 
  current x 1,854,741 ops/sec ±0.86% (96 runs sampled)  result: "map"
  lib-type-of x 2,197,065 ops/sec ±0.93% (94 runs sampled)  result: "object"
  lib-typeof x 3,704,488 ops/sec ±1.09% (96 runs sampled)  result: "map"

  fastest is lib-typeof
#9: null 
  current x 11,959,210 ops/sec ±1.11% (92 runs sampled)  result: "null"
  lib-type-of x 5,217,203 ops/sec ±0.83% (94 runs sampled)  result: "null"
  lib-typeof x 3,708,764 ops/sec ±1.12% (94 runs sampled)  result: "null"

  fastest is current
#10: number 
  current x 8,027,616 ops/sec ±1.72% (91 runs sampled)  result: "number"
  lib-type-of x 952,614 ops/sec ±1.29% (95 runs sampled)  result: "number"
  lib-typeof x 3,523,244 ops/sec ±1.16% (94 runs sampled)  result: "number"

  fastest is current
#11: object 
  current x 1,617,615 ops/sec ±1.29% (96 runs sampled)  result: "object"
  lib-type-of x 1,345,272 ops/sec ±0.93% (97 runs sampled)  result: "object"
  lib-typeof x 3,928,925 ops/sec ±0.85% (97 runs sampled)  result: "object"

  fastest is lib-typeof
#12: regex 
  current x 10,387,302 ops/sec ±0.92% (100 runs sampled)  result: "regexp"
  lib-type-of x 1,799,320 ops/sec ±0.94% (99 runs sampled)  result: "regexp"
  lib-typeof x 4,007,817 ops/sec ±0.95% (93 runs sampled)  result: "regexp"

  fastest is current
#13: set 
  current x 1,875,536 ops/sec ±0.78% (97 runs sampled)  result: "set"
  lib-type-of x 2,287,938 ops/sec ±1.07% (93 runs sampled)  result: "object"
  lib-typeof x 3,820,184 ops/sec ±1.08% (93 runs sampled)  result: "set"

  fastest is lib-typeof
#14: string 
  current x 9,072,960 ops/sec ±1.28% (97 runs sampled)  result: "string"
  lib-type-of x 1,510,619 ops/sec ±1.99% (95 runs sampled)  result: "string"
  lib-typeof x 3,919,685 ops/sec ±1.35% (93 runs sampled)  result: "string"

  fastest is current
#15: symbol 
  current x 7,058,253 ops/sec ±1.38% (86 runs sampled)  result: "symbol"
  lib-type-of x 780,340 ops/sec ±0.89% (92 runs sampled)  result: "symbol"
  lib-typeof x 3,175,936 ops/sec ±0.89% (96 runs sampled)  result: "symbol"

  fastest is current
#16: template-strings 
  current x 7,975,644 ops/sec ±1.41% (95 runs sampled)  result: "string"
  lib-type-of x 1,435,662 ops/sec ±0.99% (96 runs sampled)  result: "string"
  lib-typeof x 3,739,733 ops/sec ±1.15% (93 runs sampled)  result: "string"

  fastest is current
#17: undef 
  current x 11,674,991 ops/sec ±1.14% (91 runs sampled)  result: "undefined"
  lib-type-of x 6,217,251 ops/sec ±1.17% (89 runs sampled)  result: "undefined"
  lib-typeof x 8,805,118 ops/sec ±0.97% (97 runs sampled)  result: "undefined"

  fastest is current
#18: weakmap 
  current x 1,492,227 ops/sec ±1.07% (98 runs sampled)  result: "weakmap"
  lib-type-of x 1,985,255 ops/sec ±0.85% (92 runs sampled)  result: "object"
  lib-typeof x 3,555,719 ops/sec ±1.13% (97 runs sampled)  result: "weakmap"

  fastest is lib-typeof
#19: weakset 
  current x 1,582,731 ops/sec ±1.62% (97 runs sampled)  result: "weakset"
  lib-type-of x 1,725,899 ops/sec ±0.94% (98 runs sampled)  result: "object"
  lib-typeof x 3,701,536 ops/sec ±0.88% (97 runs sampled)  result: "weakset"

  fastest is lib-typeof
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014-2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 24, 2015._
