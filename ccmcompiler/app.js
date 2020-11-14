const express = require('express');
const cors = require('cors');
const fs = require('fs');
const allcompile = require('./All_compile');
const app = express();
const filemaker = require('./file_maker');
const fetch = require("node-fetch");
app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
    // console.log(req.params('id'));
    res.send(JSON.stringify('CCM GET World Class'));
});

app.post('/problem',function(req,res){
    // console.log(req.body);
    console.log('CCM GET World Class');
    const data = JSON.parse(req.body.data);
    const num = req.body.num;

    try{
        fetch('http://localhost:5000/problem/?num='+num,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            const json_data = res[0];
            const ioexam = json_data.ioexam;
            // fs.rmdirSync("./input",{ 
            //     recursive: true, 
            //   });
            // fs.rmdirSync("./answer",{ 
            //     recursive: true, 
            //   });
            // fs.mkdirSync("./input");
            // fs.mkdirSync("./answer");
            // console.log(ioexam.length)
            for(var i = 1; i <= ioexam.length; i++){
                fs.writeFileSync("./input/"+i+".in",JSON.parse(ioexam[i-1]).input,'utf-8')
                fs.writeFileSync("./answer/"+i+".out",JSON.parse(ioexam[i-1]).output,'utf-8')
            }
        })
    } catch(err){
        console.log(err);
    }

    filemaker.filemaker(data.lang,data.code,num);
    allcompile.allcompile(data.lang,num,(callback) =>{
        if(callback == 400){
            console.log(400);
        }
        else{
            console.log(200);
        }
        const result = fs.readFileSync("./user1/result.txt");
        const result_string = result.toString();
        console.log(result_string);
        res.send(JSON.stringify(result_string));
    });
});

app.listen(3001,function(){
    console.log('compiler server open');
}); 