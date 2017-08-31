/** ==========================================================================
 * NUMBER TYPE
 * ===========================================================================
 */
let n = 123;
console.log(n, typeof n);   // return 123, Number

let m = n / 0;
console.log(m, typeof m);   // retun Infinity, Number

let o = Infinity;
console.log(o, typeof o);   // retun Infinity, Number

let a = "I like cat" / 2;
console.log(a, typeof a);   // retun NaN, Number

/** ==========================================================================
 * STRING TYPE
 * ===========================================================================
 */
// let str = "Hello";
// console.log(str, typeof str);           // return "Hello", String

// let str2 = 'Hello 2';
// console.log(str2, typeof str2);         // return "Hello 2", String

// let phrase = `Can embed ${ str }`;
// console.log(phrase, typeof phrase);     // return "Can embed Hello", String

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// let number = 10;
// let phrase2 = `I have ${ number } apples`;
// console.log(phrase2, typeof phrase2);

/** ==========================================================================
 * BOOLEAN TYPE
 * ===========================================================================
 */
// let nameFieldChecked = true;
// console.log(nameFieldChecked, typeof nameFieldChecked);     // return true, Boolean

// let ageFieldChecked = false;
// console.log(ageFieldChecked, typeof ageFieldChecked);       // return false, Boolean

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// let isGreater = 4 > 1;
// console.log(isGreater, typeof isGreater);

/** ==========================================================================
 * UNDEFINED TYPE
 * ===========================================================================
 */
// let x;
// console.log(x, typeof x);   // return undefined, Undefined

/**
 * OBJECT & SYMBOL TYPE
 */
// We will talk about Object & Symbol Type after we know enough about primitives.

/** ==========================================================================
 * FUNCTION TYPE
 * ===========================================================================
 */
// function greeting(name) {
//     let a = `Hello ${ name }`;
//     return a;
// }
// console.log(greeting('John'), typeof greeting);   // return "Hello John", Function