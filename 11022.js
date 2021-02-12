const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let count = Number(input[0]);	// 테스트 케이스의 개수
  let numbers = [];

  for (let i = 1; i <= count; i++) {
    numbers.push(input[i].split(' '));
  }
  for (let i = 0; i < count; i++) {
    num1 = Number(numbers[i][0]);
    num2 = Number(numbers[i][1]);

    console.log('Case #'+ (i+1) + ': ' + numbers[i][0] + ' + ' +  numbers[i][1]+ ' = ' + (num1 + num2));
  }
	
  process.exit();
});

