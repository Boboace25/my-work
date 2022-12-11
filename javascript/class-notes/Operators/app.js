// console.log('test connection');

// console.log(5 + 6);
// console.log(5 * 6);
// console.log(9 % 2);

// let x = 10;
// let y = x++;
// // ++ increment does increment after every expression handles, increase 1
// console.log(y);
// console.log(x);

// let a = 10;
// let b = ++a;

// console.log(b);
// console.log(a);

// let c = 1 + 2 * (5 - 4 / 2) ** 2
// console.log(c)

// let a = 10;
// let b = --a;

// console.log(b); equal 9

// let x = 10
// let y= 10

// console.log( x == y);
// console.log(x != y);

// let a = 10
// let b = "10"

// console.log (a === b);
// console.log (a !== b);

// let x = 10;
// console.log(Boolean(x))
// console.log(!!x)

// let text = 'Hello';
// console.log(!text); 
// let y = 0;
// console.log(!y); 

// check if x is between 5 and 15
// let x = 3;
// console.log (x > 5 && x < 15);

// checking odd numbers
// let x = 11;
// console.log( x % 2 ==1);
// console.log(Boolean (x % 2));

// checking even number
// console.log(x % 2 == 0);
// console.log(!(x % 2)); 

// // divisible by 5
// let x = prompt('Enter a number');
// console.log(x % 5 == 1);

// // are you at risk?
// const alcohol = confirm("Do you take alcohol")

// const cigarette = confirm ("Do you smoke");

// const age = confirm("are you older than 65");

// const risk = alcohol || cigarette || age;
// console.log(risk);

// // check password and username matches?
// const username = "Clarusway"
// const password = "1234"

// const usernameEnter = prompt("Enter username:")
// const passwordEntered = prompt("Enter password:")

// const ismatched = username === usernameEnter && password === passwordEntered;
// console.log(ismatched);

// // Age Check!
// // If age is in between 25-30, you can take this test
// const age = prompt('Enter your age?');
// const check = age >=25 && age <= 30; 
// console.log(check);

// console.log(check && 'You can take test' || "You are not eligible!");
// // Provide a meaningful response 
// // If in range 25-30, you can take test
// // if not, you are not suitable

let x = 12;
let y = "12";

console.log(x + y); // concat
// x into string and concat 2 strings

// console.log(x / y); 
// console.log(x - y); 
// // automatically convery into number

// console.log(x + Number(y));
// console.log(x + parseInt(y));
// console.log(x + parseFloat(y));
// console.log(x + +y);

// const age = prompt('enter your age');
// console.log(age, typeof age);
// // string type

// const age2 = +prompt('enter your age');
// console.log(age2, typeof age2);
// // add "+" convert into number

// Not a Number NaN

let y = 'text';
console.log(Number(y));
// become "NaN" 

const age = Number(prompt("Enter you age"));
console.log(age); 
console.log(isNaN(age));
// become "NaN"
