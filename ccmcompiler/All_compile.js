var fs = require('fs');
var process = require('child_process');

var select = "c"
// select c++, c ~~
var time_out = 1
if(select == "python"){
    process.execFile('./dist/compile_py',[select,time_out],function (err,stdout,stderr) {
        if(err) {
            fs.writeFile('./result/result.txt',stderr,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
                }
            });
        } else {
            fs.writeFile('./result/result.txt',stdout,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
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
                    console.log('02 WRITE DONE!');
                }
            });
        } else {
            fs.writeFile('./result/result.txt',stdout,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
                }
            });
        }
    });
}