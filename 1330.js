var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(' ');
var A = parseInt(input[0]);
var B = parseInt(input[1]);

if(A>B)
{  console.log('>'); }
    else if(A<B){
        console.log('<');
    }else{
       console.log("=="); 
    } 