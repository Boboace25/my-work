console.log('Excercise - 01');

const convert = (amount, rate) => amount * rate;
console.log(convert(1000, 1.5));

console.log('Excercise - 02');
// count the letter in text //
const counter = (text, char) => {
    let count = 0;
    for(let i = 0; i< text.length; i++){
        if(text[i] === char){count++;}
    }
    return count;
}
console.log(counter('Clarusway' , 'a'));

console.log('Excercise - 03');
// check number is prime number or not //
function primeOrNot(num){
    if(num < 2){return false;}
    for(let i = 2; i < num; i++){
        if(num % i ===0){return false;}
    }
    return true;
}
console.log(primeOrNot(97));