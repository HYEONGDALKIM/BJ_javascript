var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(' ');
var N = parseInt(input[0]);

for(i=1; i<=9; i++){
    console.log( N +' * '+ i +' = '+N * i); 
}