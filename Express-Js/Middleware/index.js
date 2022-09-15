const express = require('express');
const app = express();

// Making a middleware
const reqFilter = (req,res,next)=>{
    console.log('reqFilter');
    next();
}

app.use(reqFilter);

app.get('/',(req,res)=>{
res.send('welcome to home page');
});


app.get('/users',(req,res)=>{
res.send('welcome to users page');
});

app.listen(4500);