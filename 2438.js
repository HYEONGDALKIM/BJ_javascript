let fs = require('fs');
let input = fs.readFileSync('data.txt').toString().split(' ');
let num =parseInt(input);
let stars ='';

for(let i = 0; i< num; i++){
    for(let j =0; j <= i; j++){
        stars += '*';
    }
    stars += '\n';
}console.log(stars);