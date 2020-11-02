var process = require('child_process');
var fs = require('fs');
var memberData = new Object();
memberData.name="user"
memberData.InputFile=memberData.name+".py"
memberData.OutputFile=memberData.name+".txt"
memberData.result = ""
process.exec('python ./data/'+memberData.InputFile,function (err,stdout,stderr) {
    if (err) {
        fs.writeFile('./result/'+ memberData.OutputFile,stderr,'utf-8',function(e){
            if(e){
                console.log(e);
            }
            else{
                console.log('02 WRITE DONE!');
                memberData.result = stderr;
                console.log(JSON.stringify(memberData));
            }
        });
    } else {
        fs.writeFile('./result/user.txt',stdout,'utf-8',function(e){
            if(e){
                console.log(e);
            }
            else{
                console.log('02 WRITE DONE!');
                memberData.result = stdout;
                console.log(JSON.stringify(memberData));
            }
        });
    }
});