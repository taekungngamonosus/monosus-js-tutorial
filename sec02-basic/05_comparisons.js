/** ==========================================================================
 * STRING COMPARISON
 * ===========================================================================
 */
console.log('Z' > 'A');             // return true
console.log('Glow' > 'Glee');       // return true
console.log('Bee' > 'Be');          // return true
console.log('B' > 'b');             // return false
console.log('o' > 'e');             // return true

/** ==========================================================================
 * COMPARISON OF DIFFERENT TYPES
 * ===========================================================================
 */
// console.log('2' > 1);               // return true
// console.log('01' == 1);             // return true
// ---------------------------------------------------------------------------

// let a = 0;
// console.log(Boolean(a));            // return false

// let b = "0";
// console.log(Boolean(b));            // return true

// console.log(a == b);                // return true
// console.log(a === b);               // return false
// ---------------------------------------------------------------------------

/** ==========================================================================
 * STRICT EQUALITY
 * ===========================================================================
 */
// console.log(0 == false);            // return true
// console.log('' == false);           // return true

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// console.log(' ' == false);

// Try to check the value in order to number, You will get the anwser.
// console.log(Number(''));
// console.log(Number(' '));

/** ==========================================================================
 * COMPARISON WITH NULL AND UNDEFINED
 * ===========================================================================
 */
// // For a non-strict check
// console.log(null == undefined);     // return true
// // For a strict equality check
// console.log(null === undefined);    // return false

// // Strange result: null vs 0
// console.log(null > 0);              // return false
// console.log(null == 0);             // return false
// console.log(null >= 0);             // return true

// // An incomparable undefined
// console.log(undefined > 0);         // return false
// console.log(undefined < 0);         // return false

/**
 * ************ TEST ************
 */
// If we write this, What will we get the result ?
// console.log(undefined == 0);

// If we write this, What will we get the result ?
// console.log(undefined/null);

/**
 * ===========================================================================
 * HOMEWORK
 * What is the anwser ? ( true or false )
 * ===========================================================================
 * 1. 5 > 4
 * 2. "apple" > "pineapple"
 * 3. "2" > "12"
 * 4. undefined == null
 * 5. undefined === null
 * 6. null == "\n0\n"
 * 7. null === +"\n0\n"
 */