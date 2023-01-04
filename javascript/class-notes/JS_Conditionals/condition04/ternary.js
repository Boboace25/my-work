// const balance = 75;

// let withdraw = +prompt("How much do you want to withdraw?");

// The ternary approach:
// let result = balance >= withdraw ? 'Here is your money...' : 'Sorry but you don\'t have enough in your balance.'; 

// if ..else statement example.
// let result='';
// if (balance >= withdraw){result = 'Here is your money..';}
// else{result = 'Sorry but you don\'t have enough in your balance';}
// console.log(result);

// const score= 75;
// let passing = +prompt("what is your score");
// let result = score<= passing ? 'your are pass.' : 'You are failed.';
// console.log(result);

let score = +prompt("Your score is:");
let result = score >= 70 ? "Passes" : "Failed";

console.log(`You have ${result}`);