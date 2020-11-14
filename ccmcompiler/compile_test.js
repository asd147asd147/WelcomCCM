var fs = require('fs');
var process = require('child_process');

// select c++, c ~~
var time_out = 1
var user = "user1"
var select = "python" 

if(select == "python"){
    var exec_code = 'python ./compile_py.py '+select+' '+time_out+' '+user;
    process.exec(exec_code,function (err,stdout,stderr) {
        if(err) {
            fs.writeFile('./user1/result.txt',stderr,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
                }

            });
        } else {
            fs.writeFile('./user1/result.txt',stdout,'utf-8',function(e){
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
    var exec_code = 'python ./compile_c_cpp.py '+select+' '+time_out+' '+user;
    process.exec(exec_code,function (err,stdout,stderr) {
        if(err) {
            fs.writeFile('./user1/result.txt',stderr,'utf-8',function(e){
                if(e){
                    console.log(e);
                }
                else{
                    console.log('02 WRITE DONE!');
                }
                
            });
        } else {
            fs.writeFile('./user1/result.txt',stdout,'utf-8',function(e){
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
