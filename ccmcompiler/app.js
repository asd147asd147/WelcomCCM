const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/',function(req,res){
    res.send(JSON.stringify('CCM World Class'));
});

app.listen(3001,function(){
    console.log('compiler server open');
});