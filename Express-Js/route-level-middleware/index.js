const express = require('express');
const app = express();

const reqFilter = (req,res,next) => {
    if (!req.query.age) {
        res.send('<h1>Enter your age in the query box</h1>');
    } else if (req.query.age<18){
        res.send('<h1>sorry your age is below 18</h1>')
    }else {
        next();
    }
}

app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>');
});

app.get('/users',(req,res)=>{
    res.send('<h1>This is users page</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>');
});

app.listen(4500);