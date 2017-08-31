/** ==========================================================================
 * BOOLEAN CONVERSION
 * ===========================================================================
 */
// So, the code under this condition would never execute:
if (0) { // 0 is falsy
    
}
// …And inside this condition – always works:
if (1) { // 1 is truthy

}
// We can also pass a pre-evaluated boolean value to if, like here:
// let year = 2017;
// let condition = (year == 2017);
// if (condition) {
//     console.log('True'); // execute
// }

/** ==========================================================================
 * THE ELSE CLAUSE
 * ===========================================================================
 */
// let year2 = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year2 == 2015) {
//     alert('You guessed it right!');
// } else {
//     alert( 'How can you be so wrong?' ); // any value except 2015
// }

/** ==========================================================================
 * SERVERAL CONDITIONS: ELSE IF
 * ===========================================================================
 */
// let year3 = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year3 < 2015) {
//     alert( 'Too early...' );
// } else if (year3 > 2015) {
//     alert( 'Too late' );
// } else {
//     alert( 'Exactly!' );
// }

/** ==========================================================================
 * TERNARY OPERATOR '?'
 * ===========================================================================
 */
// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
// alert(accessAllowed);

// Use '?' Operator
// let age = prompt('How old are you?', '');
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

/** ==========================================================================
 * MULTIPLE '?'
 * ===========================================================================
 */
// if, else-if
// let age = prompt('How old are you?', '');
// let message = (age < 3) ? 'Hi, baby' : 
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings!' :
//     'What an unusual age!';

// alert(message);

/** ==========================================================================
 * NON-TRADITIONAL USE OF '?'
 * ===========================================================================
 */
// let company = prompt('Which company created JavaScript?', '');
// (company.toLocaleLowerCase() == 'netscape') ? alert('Right!') : alert('Wrong!');

/**
 * ===========================================================================
 * HOMEWORK 1
 * Check the basic login, Write the program
 * ===========================================================================
 * 1. See the flow chart image in folder /images which the image name is 'homework-07-login.png'
 *    Use input method by prompt
 */

/**
 * ===========================================================================
 * HOMEWORK 2
 * Rewrite the program 'if' into '?'
 * ===========================================================================
 */
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

/**
 * ===========================================================================
 * HOMEWORK 3
 * Rewrite the program 'if..else' into '?'
 * ===========================================================================
 */
// let message;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if  (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }