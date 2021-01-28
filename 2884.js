var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");
var H = parseInt(input[0]);
var M = parseInt(input[1]);

if(M - 45 < 0) {
    M = 60 + ( M - 45 );
    H = H - 1 ;

    if(H === -1){
        H = H +24 ;
    }
}else {
    M = M-45;
}
console.log(H + ' ' + M);
