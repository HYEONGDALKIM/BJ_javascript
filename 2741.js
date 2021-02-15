const input = Number(require('fs').readFileSync('data.txt').toString());
let answer = '';

for (let i = 1; i <=input; i++){
    answer += i + "\n";
}
console.log(answer); 

