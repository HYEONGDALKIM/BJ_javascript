const fs = require('fs');
const input = fs.readFileSync('data.txt').toString().split('\n');

const N = parseInt(input[0]); 
let nums = input[1].split(' ').map(x => +x); // +를 썻을때와 Number을 썻을대가 같다?

let max = nums[0];
let min = nums[0];

for(let i =1; i<N; i++)
{
    if(max < nums[i]){
        max = nums[i];
    }
    if(min > nums[i]){
        min = nums[i];
    }
}
console.log(min, max);





// reduce 
//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// map 
// 배열 모두를 돌려주는 것? 
//배열.map((요소, 인덱스, 배열) => { return 요소 });
//map을 실행하는 배열과 결과로 나오는 배열이 다른 객체라는 것