var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(' ');
var A = parseInt(input[0]);

if(90 <= A && A <= 100){
    console.log('A');    
}else if(80 <= A && A < 90){
    console.log('B');
}else if(70 <= A && A < 80){
    console.log('C');
}else if(60 <= A && A<70){
    console.log('D');
}else{
    console.log('F');
}

