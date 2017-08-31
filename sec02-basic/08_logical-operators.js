/** ==========================================================================
 * || (OR)
 * ===========================================================================
 */
console.log(true || true);      // true
console.log(false || true);     // true
console.log(true || false);     // true
console.log(false || false);    // false

// If we write this, What will we get the result ?
// if (1 || 0) {
//     console.log('Truthy!');
// }

// For example
let hour = 9;
if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
}

// We can pass more conditions
let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
    console.log('The office is closed.');
}

/** ==========================================================================
 * OR SEEKS THE FIRST TRUTHY VALUE
 * ===========================================================================
 */
console.log(1 || 0);                    // return 1 ( 1 is truthy )
console.log(true || 'no matter what');  // return true ( true is truthy )
console.log(null || 1);                 // return 1 ( 1 is the firrst truthy value )
console.log(null || 0 || 1);            // return 1 ( the first truthy value )
console.log(undefined || null || 0);    // return 0 ( all falsy, return the last value )

// Getting the first truthy value from the list of variables or expressions.
let currentUser = null;
let defaultUser = 'John';

let name = currentUser || defaultUser || 'unnamed';

console.log(name);

// Short-circuit evaluation.
let x;
true || (x = 1);
console.log(x);     // return undefined, because (x = 1) not evaluated

// If we write this, What will we get the result ?
// let x;
// false || (x = 1);
// console.log(x);

// If we write this, What will we get the result ?
// let y = 0;
// true || (y);
// console.log(y);

/** ==========================================================================
 * && (AND)
 * ===========================================================================
 */
console.log(true && true);              // return true
console.log(false && true);             // return false
console.log(true && false);             // return false
console.log(false && false);            // return false

let hour3 =12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
    console.log('Time is 12:30');
}

if (1 && 0) {
    console.log('won\'t work, because the result is falsy.');
}

/** ==========================================================================
 * AND SEEKS THE FIRST FALSY VALUE
 * ===========================================================================
 */
// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0);                // return 0
console.log(1 && 5);                // return 5

// if the first operand is falsy
// AND returns it. The second operand is ignored
console.log(null && 5);             // return null
console.log(0 && "no matter what"); // return 0

// We can also pass several values in a row. See how the first falsy one is returned
console.log(1 && null && 3);        // return null
// When all values are truthy, the last value is returned
console.log(1 && 2 && 3);           // return 3

// AND && executes before OR ||
console.log(5 || 1 && 0);           // return 5

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// let n = 1;
// (n > 0) && console.log('Greter than zero!');

/** ==========================================================================
 * ! (NOT)
 * ===========================================================================
 */
console.log(!true);     // return false
console.log(!0);        // return true

// A double NOT !! is sometimes used for converting a value to boolean type
console.log(!!'non-empty string');      // return true
console.log(!!null);                    // return false

/**
 * ===========================================================================
 * HOMEWORK 1
 * What the code below is going to output ?
 * ===========================================================================
 * 1. console.log(aull || 2 || undefined);
 * 2. console.log(console.log(1) || 2 || console.log(3));
 * 3. console.log(1 && null && 2);
 * 4. console.log(console.log(1) && console.log(2));
 * 5. console.log(null || 2 && 3 || 4);
 */

/**
 * ===========================================================================
 * HOMEWORK 2
 * Write an "if" condition to check the age is between 14 and 90 inclusively.
 * "Inclusively" means that age can reach edges 14 or 90
 * ===========================================================================
 */

/**
 * ===========================================================================
 * HOMEWORK 3
 * Write an if condition to check that age is NOT between 14 and 90 inclusively.
 * Create two variants: the first one using NOT !, the second one - without it;
 * ===========================================================================
 */

/**
 * ===========================================================================
 * HOMEWORK 4
 * Which of these logs are going to execute?
 * What will be the results of the expressions inside if(...) ?
 * ===========================================================================
 */
// if (-1 || 0) console.log('first');
// if (-1 && 0) console.log('second');
// if (null || -1 && 1) console.log('third');