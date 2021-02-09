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
    const i =0;
    while(Number(num[i][0]) != 0 && Number(num[i][1] != 0))
    {
        i++
        num1 = Number(num[i][0]);
        num2 = Number(num[i][1]);
    }


    process.exit();
});

