let age = 36;

if(age > 25){console.log('you are allowd...');}

// this is possible if you have only 1 statement after the if...
// if(age > 25)
//     console.log('you are allowed....');

age > 25 && console.log('you are allowed');

let selection = +prompt('select the level between 1 to 10. 5 is default.');
selection = selection || 5;
console.log(`Level is ${selection}`);