var fs = require('fs');

data = "print('hello,world!\\n')";

fs.writeFile('./data/user.py',data,'utf-8',function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log('01 WRITE DONE!');
    }
 });