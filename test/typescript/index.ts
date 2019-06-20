import kindOf from "../../";

// View this file in a TypeScript environment or compile it to check for errors (npm run test-ts)
// As a sanity check, you can also execute the compiled js file in node to ensure types match functionality

// sanity check: next line should yield TS[2367] IDE and compile-time error when uncommented
// console.assert(kindOf(1) === "undefined")

/* ### Caveats and Edge Cases

#### Iterators
TypeScript determines the iterator type by the values returned in the iterator as opposed to the target object being iterated over, whereas `kind-of` returns the iterator target type as well
The (TypeScript) return type of `kindOf((new Map)[Symbol.iterator]())` (and any other iterator regardless of target) will be `"mapiterator" | "setiterator" | "stringiterator" | "arrayiterator"`.
To test for an iterator regardless of source you would simply use `kindOf(foo).endsWith("iterator")`.

#### Functions/GeneratorFunctions
Generator functions return `IterableIterator<T>`, but a 'normal' function could as well, so the TypeScript return type of `kindOf(*generator...)` is `"generatorfunction" | "function"` as opposed to just `"generatorfunction"` as TypeScript has no way to distinguish the two (to the best of my knowledge).
To test for a function regardless of type you would simply use `kindOf(foo).endsWith("function")`.
'Normal' functions that return any other type will be correctly typed as `"function"` i.e. `kindOf(() => null) == "function"`.

#### Error-like, RegExp-like, Generator-like, Date-like
These type checks will reflect the fact that `kind-of` has fallback checks for `RegExp`, `Error`, `Generator`, and `Date` objects to check for "RegExp-like" and "Error-like" etc...
- The return type of `kindOf({ flags: "", ignoreCase: true, multiline: true, global: true })` will be `"regexp"`.
- The return type of `kindOf({ message: "", constructor: { stackTraceLimit: 0 } })` will be `"error"`.
- The return type of `kindOf({ throw: () => {}, return: () => {}, next: () => {} })` will be `"generator"`.
- The return type of `kindOf({ toDateString: () => {}, getDate: () => {}, setDate: () => {} })` will be `"date"`.

#### Buffers
Buffers in environments where Buffer.isBuffer (or an appropriate polyfill) is unavailable may not correctly be typed as "buffer".
e.g. `kindOf(Buffer.from([]))` could return `"uint8array"` but TypeScript may think the return type is `"buffer"`. */

console.assert(kindOf() === "undefined");
console.assert(kindOf(undefined) === "undefined");
console.assert(kindOf(void 0) === "undefined");

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
console.assert(kindOf("") === "string");
console.assert(kindOf((0).toString()) === "string");
console.assert(kindOf(String) === "function");

console.assert(kindOf(Symbol()) === "symbol");

console.assert(kindOf((new Map)[Symbol.iterator]()) === "mapiterator");
console.assert(kindOf((new Set)[Symbol.iterator]()) === "setiterator");
console.assert(kindOf(("")[Symbol.iterator]()) === "stringiterator");
console.assert(kindOf((new Array)[Symbol.iterator]()) === "arrayiterator");

console.assert(kindOf(() => { }) === "function");
console.assert(kindOf(function () { }) === "function");
console.assert(kindOf(function (): IterableIterator<any> { return null as any as IterableIterator<any> }) === "function");
console.assert(kindOf(class { }) === "function");
console.assert(kindOf(function* (): IterableIterator<any> { }) === "generatorfunction");

console.assert(kindOf([]) === "array");
console.assert(kindOf(new Array) === "array");

console.assert(kindOf(new Date) === "date");
// date-like
console.assert(kindOf({ toDateString: () => { }, getDate: () => { }, setDate: () => { } }) === "date");

if (typeof Buffer !== "undefined") console.assert(kindOf(Buffer.from([])) === "buffer");

console.assert(kindOf(new Error) === "error");
// error-like
console.assert(kindOf({ message: "", constructor: { stackTraceLimit: 0 } }) === "error");
console.assert(kindOf({ message: "", constructor: { stackTraceLimit: 0 }, foo: 1 }) === "error");

console.assert(kindOf(new RegExp("a-z")) === "regexp");
console.assert(kindOf(/a-z/) === "regexp");
 // regexp-like
console.assert(kindOf({ flags: "", ignoreCase: true, multiline: true, global: true }) === "regexp");
console.assert(kindOf({ flags: "", ignoreCase: true, multiline: true, global: true, foo: 1 }) === "regexp");

console.assert(kindOf(Promise.resolve()) === "promise");

console.assert(kindOf(new WeakMap) === "weakmap");
console.assert(kindOf(new WeakSet) === "weakset");
console.assert(kindOf(new Map) === "map");
console.assert(kindOf(new Set) === "set");

console.assert(kindOf(new Int8Array(8)) === "int8array");
console.assert(kindOf(new Uint8Array(8)) === "uint8array");
console.assert(kindOf(new Uint8ClampedArray(8)) === "uint8clampedarray");
console.assert(kindOf(new Int16Array(8)) === "int16array");
console.assert(kindOf(new Uint16Array(8)) === "uint16array");
console.assert(kindOf(new Int32Array(8)) === "int32array");
console.assert(kindOf(new Uint32Array(8)) === "uint32array");
console.assert(kindOf(new Float32Array(8)) === "float32array");
console.assert(kindOf(new Float64Array(8)) === "float64array");

console.assert((function () { return kindOf(arguments) })() === "arguments");

// generator-like
console.assert(kindOf({ throw: () => { }, return: () => { }, next: () => { } }) === "generator");
console.assert(kindOf({ throw: () => { }, return: () => { }, next: () => { }, foo: 1 }) === "generator");

if (typeof global !== "undefined") console.assert(kindOf(global) === "global");
if (typeof window !== "undefined") console.assert(kindOf(window) === "window");

console.assert(kindOf({}) === "object");
console.assert(kindOf(new (class { })) === "object");
console.assert(kindOf(console) === "object");
