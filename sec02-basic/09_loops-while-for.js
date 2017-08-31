/** ==========================================================================
 * THE "while" LOOP
 * ===========================================================================
 */
// While the condition is true, the code from the loop body is executed.
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// when i becomes 0, the condition becomes falsy, and the loop stops
// let j = 3;
// while (j) {
//     console.log(j);
//     j--;
// }

// Brackets are not required for a single-line body
// let k = 3;
// while (k) console.log(k--);

/** ==========================================================================
 * THE "do...while" LOOP
 * ===========================================================================
 */
// The loop will first execute the body, then check the condition and, while it’s truthy, execute it again and again.
// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 3);

/** ==========================================================================
 * THE "for" LOOP
 * ===========================================================================
 */
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// let i = 0;
// for (; i < 3; i++) {
//     console.log(i);
// }

// let i = 0;
// for(; i < 3;) {
//     console.log(i);
// }

/** ==========================================================================
 * BREAKING THE LOOP
 * ===========================================================================
 */
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// alert('Sum: ' + sum);

/** ==========================================================================
 * CONTINUE TO THE NEXT ITERATION
 * ===========================================================================
 */
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// Just like this
// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         console.log(i);
//     }
// }

/** ==========================================================================
 * NO break/continue TO THE RIGHT SIDE OF '?'
 * ===========================================================================
 */
// (i > 5) ? console.log(i) : continue;

/**
 * ===========================================================================
 * HOMEWORK 1
 * What is the last value logs by this code? Why?
 * ===========================================================================
 */
// let i = 3;
// while (i) {
//     console.log(i--);
// }

// let i = 0;
// while (++i < 5) console.log(i);

// let i = 0;
// while (i++ < 5) console.log(i);

// for (let i = 0; i < 5; i++) console.log(i);
// for (let i = 0; i < 5; ++i) console.log(i);

/**
 * ===========================================================================
 * HOMEWORK 2
 * Replace "for" with "while"
 * ===========================================================================
 */
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }