/*

****
****
****
****
****

*/

for(let row = 1; row <= 5; row++){
    let result = '';
    for(let col = 1; col <= 4; col++){
        result += '*';
    }

    console.log(result);
}

console.log('---------------------');

/*

*
**
***
****
*****

*/

for(let row = 1; row <= 5; row++){
    let result = '';
    for(let col = 1; col <= row; col++){
        result += '*';
    }

    console.log(result);
}


// practice 
for(let i = 10; i <= 100; i++){
    if(i > 25){break;}
    if(i % 2){console.log(i);}
}
