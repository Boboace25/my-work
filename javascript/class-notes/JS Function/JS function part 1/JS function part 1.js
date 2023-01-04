"use strict"
// name function , and function expression //
// x= 10;
// console.log(x)

// var x


// y = 10;
// console.log(y)

// let y;

// a= 10;       
// console.log(a)

// baal= 15;
// console.log(baal)

// function sayHi(){
//   console.log("Hello")
// }

// sayHi();
// // name function//

// sayhello();
// const sayhello = function(){
//   console.log("Hello")
// }
// function expression: need initalizing, and hosting on top. let and const.//

// function greet(name){
//   console.log("Hello", name)
//   console.log(`Hello ${name}`)
// }
// greet ("John")
// greet("Jane")
// Parameter and Argument//

// function add(Num1, Num2){
//   const result = Num1 + Num2;
//   console.log(`result ${result}`)
// }

// add(5, 6)
// add(10, 15)
// Parameter and Argument

// const add = function(num1, num2){
//   console.log("Result =", num1 + num2)
// }

// add(5,10)
// add(6,4)

// add(5+3)

// let add = function(num1, num2){
//   const result = num1+num2
//   return result
// }

// const res1= add(3,4)
// console.log(res1)
// // or
// console.log(add(5,10))

// practice, from begaining to end
// function reverse(text){
//   let result = ""
//   for (let i = 0; i < text.length; i++)
//   {result = text[i] + result}

//   return result; }

// console.log(reverse("Hello"))

// from end to begaining
// function reverse2(text){
//   let result = ""
//   for (let i = text.length-1; i >=0 ; i--)
//   {result += text[i]}

//   return result; }

// console.log(reverse2("Hello"))

// practice facotrial number
// function factorial(number){
//   if (number ===0) return 1;
//   if (isNaN(number)) return "Provide a number";
  
//   let result = 1
//   for(let i = 1; i <= number; i++){result *= i}
//   return result;
// }
// console.log(factorial(0))

// default parameter
// function greet(name= "Guest"){
//   console.log("Hello", name)
// }
// greet()

// Practice: Get 3 numbers, find the greatest among them. 
// function greatest(num1, num2, num3){
//   let result;
//   if(num1 > num2 && num1 > num3){
//     result = (`${num1} is greatest`);}

//   else if(num2 > num1 && num2 > num3){
//     result = ( `${num2} is greatest`);}

//   else if (num3 > num1 && num3 > num2){
//     result= ( `${num3} is greatest`);}
//   return result;
// }
// console.log(greatest(5,10,8))

// Calculator

// const add = function(a, b){
//   return a + b}

// const sub = function(a , b){
//   return a - b}

// const div = function (a, b){
//   return a / b}

// const mul = function (a ,b){
//   return a * b}

// function calculator(a, b, operator){
//   if (operator === "+") return add(a,b);
//   if (operator === "-") return sub(a,b);
//   if (operator === "/") return div(a,b);
//   if (operator === "*") return mul(a,b);
// }
// console.log(calculator(5, 6, "*"))

// scoping
// global, function, block 
// Function, Var have function scope.
// Let, Const have block scope 

var globalA = 11;
let globalX = 22;
var a = 55;

function test() {
  var a = 10;
  let x = 20;

  if (true){
    let y =30;
    var b = 50;

    // console.log(x,y,a,b)
  }

  console.log(y) //let = y is not function scope, so not working. 
  console.log(a, x)
  console.log(globalA)
}
test()
console.log(a)
// console.log(a) //Error
// console.log(x) //Error