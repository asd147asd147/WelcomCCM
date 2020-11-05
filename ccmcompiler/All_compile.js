var fs = require('fs');
var process = require('child_process');

// select c++, c ~~
exports.allcompile = function(select, callback){
    process.execFile('./dist/compile',[select],function (err,stdout,stderr) {
        if(err) {
            fs.writeFile('./result/user.txt',stderr,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
                }
                callback(400);
            });
        } else {
            fs.writeFile('./result/user.txt',stdout,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
                }
                callback(200);
            });
        }
    });
}
    