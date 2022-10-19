// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String
const text = "some text";
// Number
const numberEx = 45;
// Boolean
let value1 = true;
let value2 = false;
// Null
const result = null;
// Undefined
let name;
// Symbol(ES6)

console.log(typeof text);
console.log(typeof "some text");
console.log(typeof numberEx);
console.log(typeof 45);
console.log(typeof value1);
console.log(typeof value2);
// typeof null returns object - this is wrong - a bug in js - should return null
console.log(typeof result);
console.log(typeof name);
