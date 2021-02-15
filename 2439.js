let fs = require('fs');
let input = fs.readFileSync('data.txt').toString().split(' ');
let num =parseInt(input);

let stars = '';

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num -i-1; j++) {
    stars += ' ';
  }
  for (let k = 0; k <=i; k++) {
    stars += '*';
  }
  stars += '\n';
}
console.log(stars);