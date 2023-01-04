let num1 = +prompt('Enter number 1');
let num2 = +prompt('Enter number 2');

if(num1 > num2){console.log(`${num1} is greater than ${num2}`);}

else if (num2 > num1){console.log(`${num2} is greater than ${num1}`);}

else{console.log(`${num2} is equal to ${num1}`);}

console.log('----------------');

const age = +prompt('How old are you?');

// console.log(typeof age); string
// add "+" to prompt convert from string to number

if (age > 25){
    console.log('You are allowed...');
}else{console.log('You are not allowed')};

console.log('-------------------');

let num01 = +prompt('enter a number');

// console.log(typeof num1);

if(num01 % 2){
    console.log(`${num01} is an odd Number.`);
} else{console.log(`${num01} is an even Number.`);}



