var fs = require('fs');
var process = require('child_process');

var select = "python"
// select c++, c ~~
var time_out = 10
exports.compile = function(callback){
    if(select == "python"){
        process.execFile('./dist/compile_py',[select,time_out],function (err,stdout,stderr) {
            if(err) {
                fs.writeFile('./result/result.txt',stderr,'utf-8',function(e){
                    if(e){
                        console.log(e);
                    }
                    else{
                        console.log('02 WRITE DONE! 400');
                        callback(400);
                    }
                });
            } else {
                fs.writeFile('./result/result.txt',stdout,'utf-8',function(e){
                    if(e){
                        console.log(e);
                    }
                    else{
                        console.log('02 WRITE DONE! 200');
                        callback(200);
                    }
                });
            }
        });
    }
    else{
        process.execFile('./dist/compile_c_cpp',[select,time_out],function (err,stdout,stderr) {
            if(err) {
                fs.writeFile('./result/result.txt',stderr,'utf-8',function(e){
                    if(e){
                        console.log(e);
                    }
                    else{
                        console.log('02 WRITE DONE! 400');
                        callback(400);
                    }
                });
            } else {
                fs.writeFile('./result/result.txt',stdout,'utf-8',function(e){
                    if(e){
                        console.log(e);
                    }
                    else{
                        console.log('02 WRITE DONE! 200');
                        callback(200);
                    }
                });
            }
        });
    }
}