const express = require('express');
const app = express();

const path = require('path');

console.log(__dirname);

app.get('',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/web',(req,res)=>{
    res.sendFile(`${__dirname}/web.html`);
});
app.get('/contact',(req,res)=>{
    res.sendFile(`${__dirname}/contact.html`);
});

app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/404.html`);
});



app.listen(4500);