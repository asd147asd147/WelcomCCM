var fs = require('fs');

data = "print('hello,world!\\n')";
// data = 'JSON.parse(user_data)
//
fs.writeFile('./data/user.py',data,'utf-8',function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log('01 WRITE DONE!');
    }
 });

/*
 fs.writeFile('./data/'+ data.name+'.py',data.input,'utf-8',function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log('01 WRITE DONE!');
    }
 });
 */