const input = Number(require('fs').readFileSync('data.txt').toString());
let answer = '';

for (let i = input; i >= 1; i--){
    answer += i + "\n";
}
console.log(answer); 

