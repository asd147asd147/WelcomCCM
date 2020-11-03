var fs = require('fs');

data = "print('hello,world!\\n')";

// data ~~ 따로 받아옴
// 경우 따라 py, c, c++ 코드로 변환

fs.writeFile('./data/user.py',data,'utf-8',function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log('01 WRITE DONE!');
    }
 });