/** ==========================================================================
 * FUNCTION DECLARATION
 * ===========================================================================
 */
function sayHi() {
    console.log('Hello! SayHi 1!');
}

/** ==========================================================================
 * FUNCTION EXPRESSIONS
 * ===========================================================================
 */

// let sayHi = function () {
//     console.log('Hello! SayHi 1!');
// };

// // Call function
// sayHi();
// ---------------------------------------------------------------------------

// // Create function
// function sayHi() {
//     console.log('Hello SayHi 2!');
// }

// // Copy function
// let func = sayHi;

// func();     // Run the copy ( It works )
// sayHi();    // This still wirks too

/** ==========================================================================
 * CALLBACK FUNCTION
 * ===========================================================================
 */
// const prompt = require('prompt');

// prompt.start();

// function ask (question, yes, no) {
    
//     console.log(question);
    
//     prompt.get(['anwser'], function (err, result) {
//         if (err) { return onErr(err); }

//         let anwser = result.anwser;

//         if(anwser.toLowerCase() == 'yes') {
//             yes();
//         } else {
//             no();
//         }

//     });
// }

// function ok () {
//     console.log('You agreed.');
// }

// function cancel () {
//     console.log('You canceled the execution.');
// }

// ask('Do you agree?', ok, cancel);

/** ==========================================================================
 * FUNCTION EXPRESSION VS FUNCTION DECLARATION
 * ===========================================================================
 */
// // Declaration
// sayHi('John Snow');     // return Hello, John Snow
// function sayHi(name) {
//     console.log(`Hello, ${ name }`);
// }

// // Expression
// sayHi('John Snow');     // error: sayHi is not defined
// let sayHi = function (name) {
//     console.log(`Hello, ${ name }`);
// };

// Function Declaration in a block
// let age = 18;
// if (age < 18) {
//     function welcome() {
//         console.log("Hello!");
//     }
// } else {
//     function welcome() {
//         console.log("Greetings!");
//     }
// }

// welcome();

// Function Expression in a block
// let age = 18;
// let welcome;
// if (age < 18) {
//     welcome = function() {
//         console.log("Hello!");
//     };
// } else {
//     welcome = function() {
//         console.log("Greetings!");
//     };
// }

// welcome();

/** ==========================================================================
 * ARROW FUNCTIONS
 * ===========================================================================
 */
// let func = function (a, b) {
//     return a + b;
// };

// console.log(func(1, 2));

// Change to this
// let func = (a, b) => {
//     return a + b;
// }

// console.log(func(1, 2));