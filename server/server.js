const expreass = require('express');
require('dotenv').config();
require('./Database/connection');


const port = process.env.PORT || 8000;

const myapp = expreass();

    myapp.get('/',(req, res)=>{
        res.send('welcome to express js');
        res.send(process);
    });

    myapp.get('/about',(req, res)=>{
        res.send('this is about pageeeeeeeeeeeee');
    });
    myapp.listen(6500,()=>{
        console.log(`server is running at port:${port}`);
    });