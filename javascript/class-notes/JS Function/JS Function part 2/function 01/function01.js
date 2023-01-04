function oldschool(pre, uname){
    console.log(`Good Morning ${pre}.${name}`);
}

oldschool('Mr' , 'John');
// tradition function//

const newApp = (pre, uname) => {
    console.log(`Good Morning ${pre}.${uname}`);
}

newApp('Mrs' , 'Smith');
/////////////////////////////////////////////////////////////////
// arrow function, "=>" replace "function"//

function addOS(num1 ,num2){
    let result = num1 + num2;
    return result;
}
console.log(addOS(5,8));
// tradition function method//

const addNA = (num1, num2) => num1 + num2;

console.log(addNA(7,3));
// arrow function method//
////////////////////////////////////////////////////////////////////

const findMaxNA = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(findMaxNA(5,8));
// ternary arrow function//

function findMaxOS(num1, num2){return num1 > num2 ? num1 : num2;}
console.log(findMaxOS(5,8));
// function method//

/////////////////////////////////////////////////////////////////////////

function oddOrEven(num){return num % 2 ? 'ODD' : 'EVEN'}
console.log(oddOrEven(4));

//OR//

const oddOrEven22 = (num) => num % 2 ? 'ODD' : 'EVEN'
console.log(oddOrEven22 (7));
// arrow function//
//////////////////////////////////////////////////////////////////

// V1.0 //
// function check(smoking, alcohol, over65){
//     if (smoking || alcohol || over65){
//         return 'There is risk';}
//         else{return 'There is no risk';}
// }
// console.log(check(false, false, false));

// V 1.1 //
// function check2(smoking, alcohol, over65){
//     let result = smoking || alcohol || over65 ? 'There is risk'  : 'There is no risk';
//     return result;
// }
// console.log(check2(true, false, false));

// V 1.2 //
// function check3(smoking, alcohol, over65){
//     return smoking || alcohol || over65 ? 'There is risk'  : 'There is no risk';
    
// }
// console.log(check3(false, false, true));

// V 2.0//
const check4 = (smoking, alcohol, over65) => smoking || alcohol || over65 ? 'There is risk'  : 'There is no risk';
console.log(check4(true, false, true));