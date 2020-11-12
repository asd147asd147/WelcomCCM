const express = require('express');
const cors = require('cors');
const fs = require('fs');
const allcompile = require('./All_compile');
const app = express();
const filemaker = require('./file_maker');

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
    // console.log(data);
    filemaker.filemaker(data.lang,data.code);
    allcompile.allcompile(data.lang,(callback) =>{
        if(callback == 400){
            console.log(400);
        }
        else{
            console.log(200);
        }
        const result = fs.readFileSync("./user1/result.txt");
        const result_string = result.toString();
        console.log(result_string);
        res.json(JSON.stringify(result_string));
    });
});

app.listen(3001,function(){
    console.log('compiler server open');
}); 