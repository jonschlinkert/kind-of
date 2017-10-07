/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */
export declare function kindOf(val: any): "error" | "symbol" | "string" | "number" | "undefined" | "null" | "boolean" | "generatorfunction" | "function" | "array" | "regexp" | "date" | "arguments" | "promise" | "buffer" | "set" | "weakset" | "map" | "weakmap" | "mapiterator" | "setiterator" | "stringiterator" | "arrayiterator" | "int8array" | "uint8array" | "uint8clampedarray" | "int16array" | "uint16array" | "int32array" | "uint32array" | "float32array" | "float64array" | "object";
export default kindOf;
