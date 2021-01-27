var fs = require('fs'); 
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var A = parseInt(input[0]);
var B = parseInt(input[1]);
var C = B.toString().split('');

console.log(A*C[2]);
console.log(A*C[1]);
console.log(A*C[0]);
console.log(A*B);