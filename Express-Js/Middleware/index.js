const express = require('express');
const app = express();

// Making a middleware
// const reqFilter = (req,res,next)=>{
//     console.log('reqFilter');
//     next();
// }


// Making the use of the middleware in real life

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
res.send('welcome to home page');
});


app.get('/users',(req,res)=>{
res.send('welcome to users page');
});

app.listen(4500);