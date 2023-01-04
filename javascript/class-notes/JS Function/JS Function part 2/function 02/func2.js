// const testing = function ( ){
//     console.log('here I am');
// }

// IIFE //
const testing = ((me ='developer') => `Here is ${me}...`)('User');
console.log(testing);

// callback function 
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const mul = (num1, num2) => num1 * num2;

// higher order functions //
const calculator = (num1, num2, process) => process(num1, num2);
console.log(calculator(25, 5, add));
console.log(calculator(25, 5, mul));
console.log(calculator(25, 5, sub));
console.log(calculator(25, 5, div));
