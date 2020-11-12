var fs = require('fs');
const makeFolder = (dir) =>{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
}

// data ~~ 따로 받아옴
// 경우 따라 py, c, c++ 코드로 변환
exports.filemaker = function(select, code) {
    if(select == "python"){
        makeFolder("./user1")
        fs.writeFile('./user1/main.py',code,'utf-8',function(e){
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
        fs.writeFile('./user1/main.c',code,'utf-8',function(e){
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
        fs.writeFile('./user1/main.cpp',code,'utf-8',function(e){
            if(e){
                console.log(e);
            }
            else{
                console.log('01 WRITE DONE!');
            }
        });
    }
}