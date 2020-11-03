var fs = require('fs');
var process = require('child_process');

var select = "python"

process.execFile('./dist/compile',[select],function (err,stdout,stderr) {
    if(err) {
        fs.writeFile('./result/user.txt',stderr,'utf-8',function(e){
            if(e){
                console.log(e);
            }
            else{
                console.log('02 WRITE DONE!');
            }
        });
    } else {
        fs.writeFile('./result/user.txt',stdout,'utf-8',function(e){
            if(e){
                console.log(e);
            }
            else{
                console.log('02 WRITE DONE!');
            }
        });
    }
});
