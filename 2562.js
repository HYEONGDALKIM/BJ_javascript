const fs = require('fs');
const input = fs.readFileSync('data.txt').toString();

const nums = input.split('\n').map(x => +x); 

let max = 0;
let n =0;
for(let i =0; i<input.length; i++)
{
    if(max < nums[i]){
        max = nums[i];
        n = i+1;
    }
    
}
console.log(max);
console.log(n);



