const express = require('express');
const cors = require('cors');
const fs = require('fs');
const compile = require('./compile_py');

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
    compile.compile((callback) =>{
        if(callback == 400){
            console.log(400);
        }
        else{
            console.log(200);
        }
        const result = fs.readFileSync("./result/user.txt");
        const result_string = result.toString();
        // result_string.pop();
        console.log(result_string);
        res.send({result: JSON.stringify(result_string)});
    });
});

app.listen(3001,function(){
    console.log('compiler server open');
}); 