const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  let Test_case = parseInt(input[0]);	// 테스트 케이스의 개수
  let numbers = [];

  for (let i = 1; i <= Test_case; i++) {
    numbers.push(input[i]);
  }
  for (let i = 0; i < Test_case; i++) {
    const A = parseInt(numbers[i][0]);
    const B = parseInt(numbers[i][1]);

    console.log(A+B);
  }
	
  process.exit();
});