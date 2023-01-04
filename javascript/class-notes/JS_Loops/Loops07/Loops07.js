// // let num = 5;
// let num= +prompt('Enter number between 1 to 10.');

// for(let mult = 0; mult <=10; mult++){
//     console.log(`${num} x ${mult} = ${num * mult}`);
// }

let num;

do{num= +prompt('Enter number between 1 to 10.');}
while(!(num > 0 && num < 11));

for(let mult = 0; mult <=10; mult++){
    console.log(`${num} x ${mult} = ${num * mult}`);
}