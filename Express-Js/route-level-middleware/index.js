const express = require('express');
const app = express();

const reqFilter = require('./middleware');

// app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>');
});

// adding middleware here in /users route
app.get('/users',reqFilter,(req,res)=>{
    res.send('<h1>This is users page</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>');
});


// similarly we can apply route level middleware in two routes

app.listen(4500);