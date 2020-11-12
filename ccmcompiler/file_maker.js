var fs = require('fs');
const makeFolder = (dir) =>{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
}

data = "print('hello,world!\\n')";
user_data = {};
// user_name,코드,문제 number등을 넣었으면 좋겠음.

select = "python";
// data ~~ 따로 받아옴
// 경우 따라 py, c, c++ 코드로 변환
if(select == "python"){
    makeFolder("./user1")
    fs.writeFile('./user1/main.py',data,'utf-8',function(e){
        if(e){
            console.log(e);
        }
        else{
            console.log('01 WRITE DONE!');
        }
    });
}
else if(select == "c"){
    makeFolder("./user1")
    fs.writeFile('./user1/main.c',data,'utf-8',function(e){
        if(e){
            console.log(e);
        }
        else{
            console.log('01 WRITE DONE!');
        }
    });
}
else if(select == "cpp"){
    makeFolder("./user1")
    fs.writeFile('./user1/main.cpp',data,'utf-8',function(e){
        if(e){
            console.log(e);
        }
        else{
            console.log('01 WRITE DONE!');
        }
    });
}
