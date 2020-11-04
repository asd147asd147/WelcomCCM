var process = require('child_process');
var fs = require('fs');
exports.compile = function(callback){
    process.exec('python ./data/user.py',function (err,stdout,stderr) {
        if (err) {
            fs.writeFile('./result/user.txt',stderr,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE! 400');
                }
                callback(400);
            });
        } else {
            fs.writeFile('./result/user.txt',stdout,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE! 200');
                }
                callback(200);
            });
        }
    });
}