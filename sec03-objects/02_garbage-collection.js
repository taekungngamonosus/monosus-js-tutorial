/**
 * ================================
 * The simple example
 * ================================
 */
let user = {
    name: 'John',
};

console.log(user);

user = null;

console.log(user);

if (user != 'undefined') {
    console.log('exist');
}

// ----------------------------------------------------------------

/**
 * ================================
 * Interlinked objects
 * ================================
 */

// function marry (man, woman) {
//     woman.husband = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman,
//     }
// }

// let family = marry(
//     {
//         name: 'John',
//     },
//     {
//         name: 'Ann'
//     }
// );

// console.log(family);
// // return { father: { name: 'John', wife: { name: 'Ann', husband: [Circular] } },
// //          mother: { name: 'Ann', husband: { name: 'John', wife: [Circular] } } }

// console.log(family.father.wife.husband.wife.husband.name);

// // ----------------------------------------------------------------

// delete family.father;
// console.log(family);

// delete family.mother.husband;
// console.log(family);