const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send(`<h1>This is home page</h1> <a href="/about">Go to about page</a><br><a href="/help"> Go to Help Page</a>`);
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text"  name="fname">
    `);
});

app.get('/help',(req,res)=>{
    res.send({
        name:'abhinav',
        email:'abhinav@gmail.com'
    });
});


app.listen(4500);