// Do I know number of iteration? yes -> for loop | no -> while loop.
// Do I need to run loop at least once? yes -> do...while loop | no -> for loop, while loop.
// Do I have multiple dependancies? yes-> while loop | no -> any. 

let num = 0;
while (num <= 5){
    console.log(num);
    num ++;
}

console.log("-------------------------------");

for(let num2 = 0; num2 <= 5; num2++){
    console.log(num2);
}

console.log("-------------------------------");
// change orders still works for for loops.
let num2 = 0;

for(; num2 <= 5;){ 
    console.log(num2);
    num2++
    }