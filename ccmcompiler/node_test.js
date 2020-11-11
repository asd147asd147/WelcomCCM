var fs = require('fs');
var process = require('child_process');

var select = "c"
// select c++, c ~~
process.execFile('./dist/compile_c_cpp',[select],function (err,stdout,stderr) {
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