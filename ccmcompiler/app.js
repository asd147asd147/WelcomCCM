const express = require('express');
const cors = require('cors');
const fs = require('fs');
const allcompile = require('./All_compile');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
    // console.log(req.params('id'));
    res.send(JSON.stringify('CCM GET World Class'));
});

app.post('/',function(req,res){
    // console.log(req.body);
    console.log('CCM GET World Class');
    const code = JSON.parse(req.body.code);
    fs.writeFileSync("./data/user.py",code);
    allcompile.allcompile("python",(callback) =>{
        if(callback == 400){
            console.log(400);
        }
        else{
            console.log(200);
        }
        const result = fs.readFileSync("./result/user.txt");
        const result_string = result.toString();
        console.log(result_string);
        res.send(JSON.stringify(result_string));
    });
});

app.listen(3001,function(){
    console.log('compiler server open');
}); 