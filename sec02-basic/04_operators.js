/** ==========================================================================
 * STRING CONCATENATION, BINARY +
 * ===========================================================================
 */
let s = 'my' + 'string';
console.log(s, typeof s);       // return "mystring"

let a = '1' + 2;
console.log(a, typeof a);       // return "12", String

let b = 2 + '1';
console.log(b, typeof b);       // return "21", String

// Other arithmetic operators work only with numbers. They always convert their operands to numbers.
let c = 2 - '1';
console.log(c, typeof c);       // return 1, Number

let d = '6' / '2';
console.log(d, typeof d);       // return 3, Number

/** ==========================================================================
 * NUMERIC CONVERSION, UNARY +
 * ===========================================================================
 */
// No effect on numbers
// let e = 1;
// e = +e;
// console.log(e, typeof e);       // return 1, Number

// let f = -2;
// f = +f;
// console.log(f, typeof f);       // return -2, Number

// Converts non-numbers
// let g = true;
// g = +g; // g = Number(g);
// console.log(g, typeof g);       // return 1, Number

// let h = '';
// h = +h; // h = Number(h);
// console.log(h, typeof h);       // return 0, Number

// let apples = "2";
// let oranges = "3";

// let fruits = apples + oranges;
// console.log(fruits, typeof fruits);     // return "23", String

// fruits = +apples + +oranges;
// console.log(fruits, typeof fruits);     // return 5, Number

/** ==========================================================================
 * OPERATORS PRECEDENCE
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * ===========================================================================
 */
// Try it yourself
// console.log(1-2*5);             // return -9
// console.log(2+2*3);             // return 8
// console.log(2/6*3);             // return 1
// console.log(2/2-2);             // return -1
// console.log(2+2-1*3/3);         // return 3

/** ==========================================================================
 * ASSIGNMENT
 * ===========================================================================
 */
// let i = 2 * 2 + 1;
// console.log(i, typeof i);       // return 5, Number

// let j = k = l = 2 + 2;
// console.log(j, typeof j);       // return 4, Number
// console.log(k, typeof k);       // return 4, Number
// console.log(l, typeof l);       // return 4, Number

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// let m = 1;
// let n = 2;

// let o = 3 - (m = n + 1);

// console.log(m);
// console.log(n);
// console.log(o);

/** ==========================================================================
 * RENAINDER %
 * ===========================================================================
 */
// Try it yourself
// console.log(5 % 2);
// console.log(8 % 3);
// console.log(6 % 3);

/** ==========================================================================
 * EXPONENTIATION
 * ===========================================================================
 */
// Try it yourself
// console.log(2 ** 2); // 2 * 2
// console.log(2 ** 3); // 2 * 2 * 2
// console.log(2 ** 4); // 2 * 2 * 2 * 2
// console.log(2 ** 1/2); // square root of 2 of 2
// console.log(2 ** 1/3); // square root of 3 of 2
// console.log(2 ** 1/4); // square root of 4 of 2

// console.log(Math.pow(2, 2));
// console.log(Math.pow(2, 3));
// console.log(Math.pow(2, 4));
// console.log(Math.pow(2, 1/2));
// console.log(Math.pow(2, 1/3));
// console.log(Math.pow(2, 1/4));

/** ==========================================================================
 * INCREMENT / DECREMENT
 * ===========================================================================
 */
// let counter;

// // Increment ++
// counter = 2;
// counter++;
// console.log(counter);       // return 3

// // Decrement --
// counter = 2;
// counter--;
// console.log(counter);       // return 1

/**
 * ************ TEST ************
 */
// // If we write this, What will we get the result ?
// // console.log(4++);

// counter = 1;
// counter = ++counter;
// console.log(counter);       // return 2

// counter = counter++;
// console.log(counter);       // return 2
// ---------------------------------------------------------------------------

// counter = 1;
// counter = --counter;
// console.log(counter);       // return 0

// counter = counter--;
// console.log(counter);       // return 0
// ---------------------------------------------------------------------------

// Tips
// counter = 0;
// for(let i = 0; i < 10; i++) {
//     counter = counter++;
//     console.log(counter);
// }
// console.log(counter);

// counter = 0;
// for(let i = 0; i < 10; i++) {
//     counter = ++counter;
//     console.log(counter);
// }
// console.log(counter);

// Summary
// counter = 0;

// counter++;
// console.log(counter);       // return 1

// counter++;
// console.log(counter);       // return 2

// counter = 0;

// counter = counter++;
// console.log(counter);       // return 0

// counter = counter++;
// console.log(counter);       // return 0
// ---------------------------------------------------------------------------

// counter = 0;

// ++counter
// console.log(counter);       // return 1

// ++counter
// console.log(counter);       // return 2

// counter = 0;

// counter = ++counter;
// console.log(counter);       // return 1

// counter = ++counter;
// console.log(counter);       // return 2
// ---------------------------------------------------------------------------

// counter = 0;

// counter--;
// console.log(counter);       // return -1

// counter--;
// console.log(counter);       // return -2

// counter = 0;

// counter = counter--;
// console.log(counter);       // return 0

// counter = counter--;
// console.log(counter);       // return 0
// ---------------------------------------------------------------------------

// counter = 0;

// --counter
// console.log(counter);       // return -1

// --counter
// console.log(counter);       // return -2

// counter = 0;

// counter = --counter;
// console.log(counter);       // return -1

// counter = --counter;
// console.log(counter);       // return -2
// ---------------------------------------------------------------------------

/** ==========================================================================
 * INCREMENT / DECREMENT AMONG PTHER OPERATORS
 * ===========================================================================
 */
// Try it yourself
// let p = 1;
// console.log(2 * ++p);       // return 4
// console.log(2 * p++);       // return 4

// let q = 1;
// console.log(2 * q);         // return 2
// q++;

/** ==========================================================================
 * BITWISE OPERATORS
 * ===========================================================================
 */
// let bitWise;
// let bitWise1 = true;
// let bitWise2 = false;

// // Bitwise AND
// bitWise = bitWise1 & bitWise2;
// console.log(bitWise, typeof bitWise);   // return 0, Number

// // Bitwise OR
// bitWise = bitWise1 | bitWise2;
// console.log(bitWise, typeof bitWise);   // return 1, Number

// // Bitwise XOR
// bitWise = bitWise1 ^ bitWise2;
// console.log(bitWise, typeof bitWise);   // return 1, Number

// // Bitwise NOT
// bitWise = ~bitWise1;
// console.log(bitWise, typeof bitWise);   // return -2, Number

// // Left Shift
// bitWise = bitWise1 << bitWise2;
// console.log(bitWise, typeof bitWise);   // return 1, Number

// // Sign-propagating right shift
// bitWise = bitWise1 >> bitWise2;
// console.log(bitWise, typeof bitWise);   // return 1, Number

// // Zero-fill right shift
// bitWise = bitWise1 >>> bitWise2;
// console.log(bitWise, typeof bitWise);   // return 1, Number

/** ==========================================================================
 * MODIFY-IN-PLACE
 * ===========================================================================
 */ 
// let num = 2;

// num = num + 2;
// console.log(num);       // return 4

// num = num * 3;
// console.log(num);       // return 12
// ---------------------------------------------------------------------------

// num = 2;
// num += 2;
// console.log(num);       // return 4

// num *= 3;
// console.log(num);       // return 12
// ---------------------------------------------------------------------------

// num = 2;
// num *= 3+5;
// console.log(num);       // return 16

/** ==========================================================================
 * COMMA
 * ===========================================================================
 */ 
// let num2 = (1+2, 3+4);
// console.log(num2);      // return 7
// the first expression 1+2 is evaluated, then 3+4 is evaluated and returned as the result.

// let num3 = (1,5);
// console.log(num3);

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result of a, b and c ?
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

/**
 * ===========================================================================
 * HOMEWORK
 * What is the anwser ?
 * ===========================================================================
 * let a = 1, b = 1;
 * 1. let c = ++a;
 * 2. let d = b++;
 */
