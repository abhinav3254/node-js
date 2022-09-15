const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.send('welcome to home page');
});


app.get('/users',(req,res)=>{
res.send('welcome to users page');
});

app.listen(4500);