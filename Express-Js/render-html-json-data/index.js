const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send('<h1>This is home page</h1>');
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text"  name="fname">
    `);
});

app.listen(4500);