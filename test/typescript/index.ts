import kindOf from '../../';

// View this file in a typescript environment or compile it to check for errors (npm run test-ts)
// As a sanity check, you can also execute the compiled file to ensure types match functionality

// sanity check: next line should yeild TS[2367] IDE and compile-time error
// console.assert(kindOf(1) === "undefined")

console.assert(kindOf() === "undefined");
console.assert(kindOf(undefined) === "undefined");

console.assert(kindOf(null) === "null");

console.assert(kindOf(Boolean()) === "boolean");
console.assert(kindOf(new Boolean()) === "boolean");
console.assert(kindOf(true) === "boolean");
console.assert(kindOf(Boolean) === "function");

console.assert(kindOf(Number()) === "number");
console.assert(kindOf(new Number()) === "number");
console.assert(kindOf(0) === "number");
console.assert(kindOf(NaN) === "number");
console.assert(kindOf(Infinity) === "number");
console.assert(kindOf(Number) === "function");

console.assert(kindOf(String()) === "string");
console.assert(kindOf(new String()) === "string");
console.assert(kindOf('') === "string");
console.assert(kindOf((0).toString()) === "string");
console.assert(kindOf(String) === "function");

console.assert(kindOf(Symbol()) === "symbol");

console.assert(kindOf((new Map)[Symbol.iterator]()) === "mapiterator");
console.assert(kindOf((new Set)[Symbol.iterator]()) === "setiterator");
console.assert(kindOf(("")[Symbol.iterator]()) === "stringiterator");
console.assert(kindOf(([])[Symbol.iterator]()) === "arrayiterator");

console.assert(kindOf(() => { }) === "function");
console.assert(kindOf(function () { }) === "function");
console.assert(kindOf(class Test { }) === "function");
console.assert(kindOf(function* (): IterableIterator<any> { }) === "generatorfunction");

console.assert(kindOf([]) === "array");
console.assert(kindOf(new Array) === "array");

console.assert(kindOf(new Date) === "date");
console.assert(kindOf(Date) === "function");

if (typeof Buffer !== "undefined") console.assert(kindOf(new Buffer(8)) === "buffer");

console.assert(kindOf(new Error) === "error");

console.assert(kindOf(new RegExp('a-z')) === "regexp");
console.assert(kindOf(/a-z/) === "regexp");
console.assert(kindOf({ flags: '', ignoreCase: true, multiline: true, global: true }) === "regexp");

console.assert(kindOf(Promise.resolve()) === "promise");

console.assert(kindOf(new WeakMap) === "weakmap");
console.assert(kindOf(new WeakSet) === "weakset");
console.assert(kindOf(new Map) === "map");
console.assert(kindOf(new Set) === "set");

console.assert(kindOf(new Int8Array(8)) === 'int8array');
console.assert(kindOf(new Uint8Array(8)) === 'uint8array');
console.assert(kindOf(new Uint8ClampedArray(8)) === 'uint8clampedarray');
console.assert(kindOf(new Int16Array(8)) === 'int16array');
console.assert(kindOf(new Uint16Array(8)) === 'uint16array');
console.assert(kindOf(new Int32Array(8)) === 'int32array');
console.assert(kindOf(new Uint32Array(8)) === 'uint32array');
console.assert(kindOf(new Float32Array(8)) === 'float32array');
console.assert(kindOf(new Float64Array(8)) === 'float64array');

console.assert((() => kindOf(arguments) === "arguments")());

console.assert(kindOf({ throw: () => { }, return: () => { }, next: () => { } }) === "generator");

if (typeof global !== "undefined") console.assert(kindOf(global) === "global");
if (typeof window !== "undefined") console.assert(kindOf(window) === "window");

console.assert(kindOf({}) === "object");
console.assert(kindOf(new (class { })) === "object");
console.assert(kindOf(console) === "object");
