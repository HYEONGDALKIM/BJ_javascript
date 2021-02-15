const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let num = [];
    let i =0;
    let result = ''; 
    let whil_e = true;
    while(whil_e)
    {
        if (i !== 0) {
            result += '\n';
          }
        num.push(input[i].split(' '));
        sum = Number(num[i][0]) + Number(num[i][1]);
        if(sum == 0){
            whil_e =false;
        }else{
            result += sum;
            i++;
        }
    }
    console.log(result);
});

