/** ==========================================================================
 * ToString
 * ===========================================================================
 */
let a = true;
console.log(a, typeof a);       // return true, Boolean

a = String(a);
console.log(a, typeof a);       // return "true", String

/** ==========================================================================
 * ToNumber
 * ===========================================================================
 */
// let str = '50';
// console.log(str, typeof str);   // return "50", String

// str = Number(str);
// console.log(str, typeof str);   // return 50, Number

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// let age = Number('an arbitrary string instead of a number');
// console.log(age);

// Try it yourself
// --------------------------------
// let x = '   123   ';
// console.log(x, typeof x);
// x = Number(x);
// console.log(x, typeof x);
// // --------------------------------

// let y = '123x';
// console.log(y, typeof y);
// y = Number(y);
// console.log(y, typeof y);
// // --------------------------------

// let z = 1 + '2';
// console.log(z, typeof z);
// z = Number(z);
// console.log(z, typeof z);
// // --------------------------------

// let z2 = '1' + 2;
// console.log(z2, typeof z2);
// z2 = Number(z2);
// console.log(z2, typeof z2);
// // --------------------------------

// let m = true;
// console.log(m, typeof m);
// m = Number(m);
// console.log(m, typeof m);
// // --------------------------------

// let n = false;
// console.log(n, typeof n);
// n = Number(n);
// console.log(n, typeof n);
// // --------------------------------

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// What is data type of result ?
// let num = "6"/"2";
// console.log(num, typeof num);

/** ==========================================================================
 * ToBoolean
 * ===========================================================================
 */
// let bool1 = 1;
// console.log(bool1, typeof bool1);   // return 1, Number
// bool1 = Boolean(bool1);
// console.log(bool1, typeof bool1);   // return true, Boolean

// let bool2 = 0;
// console.log(bool2, typeof bool2);   // return 0, Number
// bool2 = Boolean(bool2);
// console.log(bool2, typeof bool2);   // return false, Boolean

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// What is the result ?
// console.log(Boolean("string"));
// console.log(Boolean("0"));
// console.log(Boolean(""));
// console.log(Boolean(" "));

/**
 * ===========================================================================
 * HOMEWORK
 * What is the anwser ? ( Both of the result and the data type )
 * ===========================================================================
 * 1. "" + 1 + 0
 * 2. "" - 1 + 0
 * 3. true + false
 * 4. 6 / "3"
 * 5. "2" * "3"
 * 6. 4 + 5 + "px"
 * 7. "$" + 4 + 5
 * 8. "4" - 2
 * 9. "4px" - 2
 * 10. 7 / 0
 * 11. "  -9\n" + 5
 * 12. "  -9\n" - 5
 * 13. null + 1
 * 14. undefined + 1
 */
