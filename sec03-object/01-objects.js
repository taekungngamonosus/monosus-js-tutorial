/**
 * ================================================================
 * ================================================================
 * 1.1 Objects
 * ================================================================
 * ================================================================
 */
// Object Constructor Syntax
// let user = new Object();
// Object Literal Syntax
// let user = {};

// console.log(user);

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.2 Literals and Properties
 * key(identifier): value => Properties
 * ================================================================
 * ================================================================
 */
// // We can immediately put some properties into {...} as “key: value” pairs:
let user = {
    name: 'John Snow',
    age: 28,
    isAlive: true,
};

// ----------------------------------------------------------------

// // Get fields of object
console.log(user.name, typeof user.name);
console.log(user.age, typeof user.age);
console.log(user.isAlive, typeof user.isAlive);

// // Add Property
// user.isAdmin = false;
// console.log(user);

// // Update Property
// user.name = 'Jack Sparrow';
// console.log(user);

// // Delete Property
// delete user.age;
// console.log(user);

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.3 Square brackets
 * ================================================================
 * ================================================================
 */
// let user = {};
// user.like cats = true; // return error

// let user = {};
// user['like cats'] = true;
// console.log(user);
// console.log(user['like cats'], typeof user['like cats']);

// // Update Property
// user['like cats'] = false;
// console.log(user);

// // Delete Property
// delete user['like cats'];
// console.log(user);

// ----------------------------------------------------------------

// =>
// => If we write this, What will we get the result ?
// =>
// Square brackets also provide a way to obtain the property name
// as the result of any expression – as opposed to a literal
// string – like from a variable as follows:

// let user = {};
// let key = 'like cats';

// user[key] = true;

// console.log(user);
// console.log(user['like cats']);

// ----------------------------------------------------------------

/**
 * ================================
 * 1.3.1 Computed Properties
 * ================================
 */
// let fruit = "apple";

// let bag = {
//     [fruit]: 5,
// };

// console.log(bag);
// console.log(bag.apple);

// ----------------------------------------------------------------

// let fruit = "apple";

// let bag = {};
// bag[fruit] = 5;

// console.log(bag);
// console.log(bag.apple);

// ----------------------------------------------------------------

// =>
// => If we write this, What will we get the result ?
// =>

// let fruit = 'apple';
// let bag = {
//     ['apple' + 'Computers']: 5,
// };

// console.log(bag);
// console.log(bag.appleComputer);

// ----------------------------------------------------------------

/**
 * ================================
 * 1.3.2 Reserved words are allowed as property names
 * ================================
 */
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }
  
// console.log(obj.for + obj.let + obj.return);

// ----------------------------------------------------------------

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__);

// ----------------------------------------------------------------

// =>
// => If we write this, What will we get the result ?
// =>

// let obj = {};
// obj.__proto = 5;
// console.log(obj.__proto);

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.4 Property value shorthand
 * ================================================================
 * ================================================================
 */
// In real code we often use existing variables as values for property names.
// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//         // ...other properties
//     };
// }

// let user = makeUser('Jack Sparrow', 39);
// console.log(user);
// console.log(user.name, typeof user.name);

// ----------------------------------------------------------------

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser('Jack Sparrow', 39);
// console.log(user);
// console.log(user.name, typeof user.name);

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.5 Existence check
 * ================================================================
 * ================================================================
 */
// let user = {};
// console.log(user.noSuchProperty === undefined); // return true

// ----------------------------------------------------------------

// let user = { name: 'Jack Sparrow', age: 39 };
// let checkExist = 'age' in user;
// console.log(checkExist); // return true

// checkExist = 'blabla' in user;
// console.log(checkExist); // return false

// ----------------------------------------------------------------

// let user = { name: 'Jack Sparrow' };
// let key = 'age';
// console.log(key in user);

// ----------------------------------------------------------------

// =>
// => If we write this, What will we get the result ?
// =>
// let obj = {
//     someProp: undefined,
// };

// console.log(obj.someProp);
// console.log('someProp' in obj);

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.6 The “for…in” loop
 * ================================================================
 * ================================================================
 */
// for (let key in object) {
//     // executes the body for each key among object properties
// }

// let user = {
//     name: "Jack Sparrow",
//     age: 39,
//     isAdmin: true
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// ----------------------------------------------------------------

/**
 * ================================
 * 1.6.1 Ordered like an object
 * ================================
 */
// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };
  
// for(let code in codes) {
//     console.log(code, typeof code);
//     console.log(codes[code], typeof codes[code]);
// }

// Math.trunc
// String(Math.trunc(Number("49")))
// String(Math.trunc(Number("41")))
// String(Math.trunc(Number("43")))
// String(Math.trunc(Number("1")))

// ----------------------------------------------------------------

// let user = {
//     name: "Jack",
//     surname: "Sparrow"
// };
// user.age = 39;

// for (let prop in user) {
//     console.log(prop, typeof prop);
// }

// ----------------------------------------------------------------

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA"
// };
  
// // =>
// // => If we write this, What will we get the result ?
// // =>
// for(let code in codes) {
//     console.log(code, typeof code);
//     console.log(+code, typeof +code);
//     console.log(codes[code], typeof codes[code]);
// }

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.7 Copying by reference
 * ================================================================
 * ================================================================
 */
// A variable stores not the object itself, but it’s “address in memory”, in other words “a reference” to it.
// let message = "Hello!";
// let phrase = message;
// console.log(message);
// console.log(phrase);

// phrase = 'New Value';
// console.log(message);
// console.log(phrase);

// ----------------------------------------------------------------

// Object, reference by properties
// let user = {
//     name: 'Jack',
// };

// let admin = user;

// console.log(user);
// console.log(admin);

// admin.name = 'John';

// console.log(user);
// console.log(admin);

// ----------------------------------------------------------------

/**
 * ================================
 * 1.7.1 Comparison by reference
 * ================================
 */
// Two objects are equal only if they are the same object.
// Two dependent objects
// let a = {};
// let b = a;

// console.log(a == b);    // return true
// console.log(a === b);   // return true

// ----------------------------------------------------------------

// Two independent objects
// let a = {};
// let b = {};

// console.log(a == b);    // return false
// console.log(a === b);   // return false

// ----------------------------------------------------------------

/**
 * ================================
 * 1.7.2 Const object
 * ================================
 */

// const user = {
//     name: "John Snow",
// };

// user.age = 28;
// console.log(user);  // return { name: 'John Snow', age: 28 }

// user.name = "Jack Sparrow";
// console.log(user);  // return { name: 'Jack Sparrow', age: 28 }

// ----------------------------------------------------------------

// user = {
//     name: 'Hector Barbossa',
// };
// console.log(user);  // TypeError: Assignment to constant variable.

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 1.8 Cloning and merging, Object.assign
 * ================================================================
 * ================================================================
 */
// let user = {
//     name: "John Snow",
//     age: 28
// };

// // the new empty object
// let clone = {};

// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
// }

// // now clone is a fully independant clone
// clone.name = "Hector Barbossa";

// console.log(user);      // return { name: 'John Snow', age: 28 }
// console.log(clone);     // return { name: 'Hector Barbossa', age: 28 }

// ----------------------------------------------------------------

// Also we can use the method Object.assign for that. ( assign > merging )
// let user = {
//     name: "John Snow",
// };

// let permissions1 = {
//     canView: true
// };

// let permissions2 = {
//     canEdit: true
// };

// Object.assign(user, permissions1, permissions2);
// console.log(user);          // return { name: 'John Snow', canView: true, canEdit: true }

// console.log(permissions1);  // return { canView: true }
// console.log(permissions2);  // return { canEdit: true }

// ----------------------------------------------------------------

// let user = {
//     name: "John Snow",
//     age: 28
// };

// let clone = {};
// Object.assign(clone, user);

// console.log(clone);             // return { name: 'John Snow', age: 28 }
// clone.name = "Hector Barbossa";

// console.log(clone);             // return { name: 'Hector Barbossa', age: 28 }
// console.log(user);              // return { name: 'John Snow', age: 28 }

// ----------------------------------------------------------------

// ==== Rewrite
// let user = {
//     name: "John Snow",
//     age: 28
// };

// let clone = Object.assign({}, user);
// console.log(clone);             // { name: 'John Snow', age: 28 }

// ----------------------------------------------------------------

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
  
// console.log(user.sizes.height);     // return 182

// ----------------------------------------------------------------

// let user = {
//     name: "John Snow",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// // =>
// // => If we write this, What will we get the result ?
// // =>

// let clone = Object.assign({}, user);

// console.log(user === clone);                // ****

// console.log(user.sizes);
// console.log(clone.sizes);

// console.log(user.sizes === clone.sizes);    // ****

// user.sizes.width++;
// console.log(clone.sizes.width);             // ****

// clone.name = 'Hector Barbossa';
// console.log(user);
// console.log(clone);