let input = require('fs').readFileSync('data.txt').toString().split(' ');
let stars = '';

for(let i = 0; i< input; i++){
    stars += '*'
    console.log(stars);
} 