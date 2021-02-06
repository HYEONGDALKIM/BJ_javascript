const fs = require('fs');
const input = fs.readFileSync('data.txt').toString().split(' ');
const A = parseInt(input[0]);
let sum = 0;

for( let i = 1; i <= A; i++){
    sum = sum + i;
}
console.log(sum);
