/**
 * ================================================================
 * ================================================================
 * 3.1 Method example
 * ================================================================
 * ================================================================
 */
let user = {
    name: 'John Snow',
    age: 28,
};

user.sayHi = function () {
    console.log('Hello!');
};

user.sayHi();       // return "Hello!"
console.log(user);  // return { name: 'John Snow', age: 28, sayHi: [Function] }

// ----------------------------------------------------------------

// let user = {};

// // first, declare
// function sayHi() {
//     console.log('Hello!');
// }

// // then add as a method
// user.sayHi = sayHi; // or user.sayHi = sayHi();

// user.sayHi();

// // Design pattern's the same as Object-oriented programming Idea ( OOP )

// ----------------------------------------------------------------

/**
 * ================================
 * 3.1.1 Method shorthand
 * ================================
 */
// let user = {
//     sayHi() {
//         console.log('Hello!');
//     }
// };

// user.sayHi();

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 3.2 “this” in methods
 * ================================================================
 * ================================================================
 */
// let user = {
//     name: 'Jack Sparrow',
//     age: 39,

//     sayHi() {
//         console.log(this.name);
//     },
// };

// user.sayHi();

// =>
// => If we write this, What will we get the result ?
// =>
// let user = {
//     name: 'Jack Sparrow',
//     age: 39,

//     sayHi() {
//         console.log(user.name);
//     },
// };

// user.sayHi();

// let admin = user;
// user = null;

// admin.sayHi();

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 3.2 “this” is not bound
 * In JavaScript, “this” keyword behaves unlike most other
 * programming languages. First, it can be used in any function.
 * ================================================================
 * ================================================================
 */
// =>
// => If we write this, What will we get the result ?
// =>
// function sayHi() {
//     console.log(this.name);
// }

// sayHi();

// ----------------------------------------------------------------

// let user = { name: 'John Snow', };
// let admin = { name: 'Admin', };

// function sayHi() {
//     console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// // =>
// // => If we write this, What will we get the result ?
// // =>
// user['f']();
// admin['f']();

// ----------------------------------------------------------------

// =>
// => If we write this, What will we get the result ?
// =>
// function sayHi() {
//     console.log(this);
// }
// sayHi();    // return global object (this is browser object)

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 3.3 Internals: Reference Type
 * ================================================================
 * ================================================================
 */
// An intricate method call can lose this, for instance:
// let user = {
//     name: 'Jack Sparrow',
//     hi() {
//         console.log(this.name);
//     },
//     bye() {
//         console.log('Bye');
//     },
// };

// user.hi();
// user.bye();

// // =>
// // => If we write this, What will we get the result ?
// // =>
// if (user.name == 'Jack Sparrow') {
//     user.hi();
// } else {
//     user.bye();
// }

// // =>
// // => If we write this, What will we get the result ?
// // =>
// (user.name == 'Jack Sparrow' ? user.hi : user.bye)();

// // =>
// // => If we write this, What will we get the result ?
// // =>
// (user.name == 'Jack Sparrow' ? user.hi() : user.bye());

// ----------------------------------------------------------------

// let user = {
//     name: 'Jack Sparrow',
//     hi() {
//         console.log(this.name);
//     },
// };

// user.hi();              // return "Jack Sparrow"
// user['hi']();           // return "Jack Sparrow"

// let a = user.hi;
// a();                    // return ???

// let hi = user.hi;
// hi();                   // return ???

// **** USE WHITEBOARD ****
// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 3.4 Arrow functions have no “this”
 * ================================================================
 * ================================================================
 */
// let user = {
//     name: 'Samwise Gamgee',
//     sayHi() {
//         let arrow = () => console.log(this.name);
//         arrow();
//     }
// };

// user.sayHi();       // return "Samwise Gamgee"

/**
 * ================================================================
 * ================================================================
 * **** HOMEWORK ****
 * ================================================================
 * ================================================================
 */

/**
 * ================================
 * 1. Create an object calculator with three methods:
 * ================================
 */
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// Use "Object" & "this"

// THIS IS A PATTERN
// let calculator = {
//     // ... your code ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

/**
 * ================================
 * 2. Using "this" in object literal
 * ================================
 */
// What is the result of accessing its ref? Why?
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// };

// let user = makeUser();
// alert( user.ref.name ); // What's the result?