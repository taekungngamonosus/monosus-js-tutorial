/** ==========================================================================
 * FUNCTION DECLARATION
 * ===========================================================================
 */
// // Declaration
function greeting() {
    console.log('Hello everyone');
}
// Call the function
greeting();

/** ==========================================================================
 * LOCAL VARIABLES
 * ===========================================================================
 */
// function greeting() {
//     let msg = 'Hello, I am javascsript!';
//     console.log(msg);
// }

// greeting();

/**
 * ************ TEST ************
 */
// // If we write this, What will we get the result ?
// // console.log(msg);

/** ==========================================================================
 * OUTER VARIABLES
 * ===========================================================================
 */
// let name = 'John Snow';

// function greeting() {
//     let message = 'Hello, ' + name;
//     console.log(message);
// }

// greeting();

/**
 * ************ TEST ************
 */
// // If we write this, What will we get the result ?
// // console.log(name);
// ---------------------------------------------------------------------------

// let name = 'John Snow';

// function greeting() {
//     name = 'Jaime Lannister';
//     let msg = 'Hello, ' + name;
//     console.log(msg);   // return 'Hello, Jaime Lannister'
// }

// console.log(name);      // return 'John Snow'
// greeting();             // return 'Hello, Jaime Lannister'
// console.log(name);      // return 'Jaime Lannister'
// ---------------------------------------------------------------------------

// let name = 'John Snow';

// function greeting() {
//     let name = 'Jaime Lannister';
//     let msg = 'Hello, ' + name;
//     console.log(msg);   // return 'Hello, Jaime Lannister'
// }

// console.log(name);      // return 'John Snow'
// greeting();             // return 'Hello, Jaime Lannister'
// console.log(name);      // return 'John Snow'
// ---------------------------------------------------------------------------

/** ==========================================================================
 * PARAMETERS
 * ===========================================================================
 */
// function greeting(from, text) {
//     console.log(from + ': ' + text);
// }
// greeting('John Snow', '"Hello, everyone!"');

/** ==========================================================================
 * DEFAULT VALUES
 * ===========================================================================
 */
// // New Style
// function greeting(from, text = 'no text given') {
//     console.log(from + ': ' + text);
// }

// greeting('John Snow');

// // Old Style
// function greeting(from, text) {
//     if (text === undefined) { // text = text || 'no text given'
//         text = 'no text given'
//     }
//     console.log(from + ': ' + text);
// }

// greeting('John Snow');

/** ==========================================================================
 * RETURN VALUE
 * ===========================================================================
 */
// function sum (a, b) {
//     return a + b;
// }

// let result = sum(1, 1);
// console.log(result);
// ---------------------------------------------------------------------------

// function checkAge (age) {
//     return x = (age > 18) ? 1 : 0;
// }

// let age = 18;
// if (checkAge(age)) {
//     console.log('Access granted');
// } else {
//     console.log('Access denied');
// }

// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }
//     console.log('Showing you the movie');
// }

// showMovie(age);

/** ==========================================================================
 * A FUNCTION WITH AN EMPTY RETURN
 * ===========================================================================
 */
// function doNothing() { /* Empty */ }
// console.log(doNothing());       // return undefined
// ---------------------------------------------------------------------------

// function doNothing() {
//     return;
// }
// console.log(doNothing());           // return undefined
// console.log(1 || undefined);        // return 1

/** ==========================================================================
 * FUNCTION == COMMENT
 * ===========================================================================
 */
// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false; 
//     }
//     return true;
// }

// showPrimes(100);