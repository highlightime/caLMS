const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/host', (req, res)=>{
    db.query('select * from student', (err, data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
            res.send(err);
        }
    })

    res.send({host:'wjddn'});
})

app.listen(PORT, () =>{
    console.log('server on : https://localhost:${PORT}/');
})