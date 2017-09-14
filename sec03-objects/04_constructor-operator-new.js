/**
 * ================================================================
 * ================================================================
 * 4.1 Constructor function
 * ================================================================
 * ================================================================
 */
// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Samwise Gamgee');

console.log(user);          // return User { name: 'Samwise Gamgee', isAdmin: false }
console.log(user.name);     // "Samwise Gangee"
console.log(user.isAdmin);  // false

// ----------------------------------------------------------------

// function User(name) {
//     // this = {};  (implicitly)

//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;

//     // return this;  (implicitly)
// }

// When a function is executed as new User(...), it does the following steps:
// 1. A new empty object is created and assigned to this.
// 2. The function body executes. Usually it modifies this, adds new properties to it.
// 3. The value of this is returned.

// let user = new User('Samwise Gamgee');

// let user = {
//     name: 'Samwise Gamgee',
//     isAdmin: false,
// };

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 4.2 Dual-syntax constructors: new.target
 * ================================================================
 * ================================================================
 */
// function User(name) {
//     if (!new.target) { // if you run me without new
//         return new User(name); // ...I will add new for you
//     }
//     this.name = name;
// }

// let jack = User("Jack Sparrow");    // redirects call to new User
// console.log(jack.name);             // return "Jack Sparrow"

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 4.3 Return from constructors
 * ================================================================
 * ================================================================
 */
// function BigUser() {
//     this.name = "John";
//     return { name: "Godzilla" };     // <-- returns and set new value of names property
// }
// console.log(new BigUser().name);     // return "Godzilla"

// ----------------------------------------------------------------

// function BigUser() {
//     this.name = "John";
//     return;
// }
// console.log(new BigUser().name);    // return "Godzilla"

// ----------------------------------------------------------------

/**
 * ================================================================
 * ================================================================
 * 4.4 Methods in constructor
 * ================================================================
 * ================================================================
 */
// function User(name) {
//     this.name = name;
//     this.sayHi = function() {
//         console.log( 'My name is: ' + this.name );
//     };
// }

// let sam = new User('Samwise Gamgee');
// sam.sayHi();