/** ==========================================================================
 * THE "switch" STATEMENT
 * ===========================================================================
 */
let a = 2 + 2;
switch (a) {
    case 3:
        console.log('To small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too large');
        break;
    default:
        console.log('I don\'t know such values.');
}

// let a = '1';
// let b = 0;
// switch (+a) { // +a change string to number
//     case b + 1: // b + 1 = 0 + 1 = 1
//         console.log('this runs, because +a is 1, exactly equals b+1');
//         break;
//     default:
//         console.log('this doesn\'t run');
// }

/** ==========================================================================
 * GROUPING OF 'case'
 * ===========================================================================
 */
// let a = 2 + 2;

// switch (a) {
//     case 4:
//         console.log('Right!');
//         break;
//     case 3:
//     case 5:
//         console.log('Wrong!');
//         console.log('Why dont\'t you take a math class?');
//         break;
//     default:
//         console.log('The result is strange. Really.');
// }

/** ==========================================================================
 * TYPE MATTERS
 * ===========================================================================
 */
// const prompt = require('prompt');
// prompt.start();
// prompt.get(['value'], function (err, result) {
//     if (err) { return onErr(err); }

//     console.log('Command-line input received:');

//     // ========================================================================
//     // ========================================================================
//     let arg = result.value;
//     // let arg = +result.value;
//     switch (arg) {
//         case '0':
//         case '1':
//             console.log('One or zero');
//             break;
        
//         case '2':
//             console.log('Two');
//             break;
        
//         case 3:
//             console.log('Never executes!');
//             break;
//         default:
//             console.log('An unknown value');
//     }
//     // ========================================================================
//     // ========================================================================

// });