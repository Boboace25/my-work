console.log('***** Loops *****');

// ******************************

// ! 1. Ask the user to input a number. Check the input of the user, if it is not a valid number then keep getting input from the user until provides a valid number.
// ? Example-1: input= 1 => output="That is a valid number"
// ? Example-2: input= "a" => output="That is not a valid number try again!"

// let value = prompt('Enter a number.');

// while(isNaN(value) || value ===''){
//     value = prompt("not a number");}

//     console.log(`${value} is a number;`);

//     // or


// let value;
// do{value = +prompt("Enter a number");
// console.log(value);}

// while(isNaN(value) || value ==='');

// console.log(`${value} is a number`);

// ******************************

// ! 2. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
// ? Example: input1= 18, input2= 24 => output="The greatest common divisor is 6"

// const num1= 18;
// const num2= 24;
// let GCD;
// for(let i = 1; i <= num1 && i <= num2; i++){
//     if(num1 % i ===0 && num2 % i ===0){
//         GCD = i;
//     }
// }
// console.log(GCD);
// ******************************

// ! 3. Write a code that displays the factors of a number entered by the user.
// ? Example: input=12 => output="The factors of 12 are 1, 2, 3, 4, 6, 12 "

    // const num = 12;
    // for(let i = 1; i <=12; i++){
    //     if(num % i ===0){
    //         console.log(i + ' is a factor of' + num);
    //     }
    // }

// ******************************

// ! 4. Write a JS code to find the given power of a number entered by the user
// ? Example: number=4, power=3 => output=64

// let num = 8;
// let power = 3;
// let result = 1
// for(let i = 0; i < power; i++){
//     result = result * num
// }
// console.log(result);
// ******************************

// ! 5. Write a code to calculate the factorial of a number entered by the user.
// ? Example: input=4 => output="The factorial of 4 is 24"

// const num = 4;
// let factorial = 1;
// for(let i = 1; i <= num; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);
// ******************************

// ! 6. Write a JS code to print a pattern of a given number.
// ? Example: input=8 => output=
// ? 1
// ? 1 2
// ? 1 2 3
// ? 1 2 3 4
// ? 1 2 3 4 5
// ? 1 2 3 4 5 6
// ? 1 2 3 4 5 6 7
// ? 1 2 3 4 5 6 7 8

// const range = 8;

// // i is for row
// for(let i = 1; i <= range; i++){
//     let str = '';
// // j is for colum, j <= i
//     for(let j = 1; j <= i; j++){
//         str +=  j + '';
//     }
//     console.log(str);
// }

// ******************************

// ! 7. Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

// for (i = 100; i <= 1000; i++){
//     if(! (i % 3) && !(i % 5)){
//         console.log(`${i} is divisible by 3 and 5`);
//     }
// }

// ******************************

// ! 8. Write a code that prints a multiplication table of numbers 1 to 10

for(let i = 1; i <= 10; i++){
    console.log('Multiplication of: ' + i);
    for(let j = 1; j <= i; j++){
    console.log(`${i} x ${j} = ${i * j}`);
    }
}