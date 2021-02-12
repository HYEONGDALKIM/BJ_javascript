let fs = require('fs');
let input = fs.readFileSync('data.txt').toString().split('\n');

let all_std = [];
all_std = input[0].split(' ');  //10이랑 5 넣어야함

let all_num = Number(all_std[0]);  // 10
let standard = Number(all_std[1]); // 5

let num = []; // 숫자들
num = input[1].split(' ');
let num2 = []; // 기준보다 아래의 숫자들
for(let i=0; i<=all_num; i++)
{
    if(Number(num[i]) <standard){
        num2 += num[i]+ ' ';
    }
}
console.log(num2);
