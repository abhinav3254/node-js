const express = require('express');
const app = express();

const route = express.Router();

const reqFilter = require('./middleware');

// app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>');
});

// adding middleware here in /users route
// app.get('/users',reqFilter,(req,res)=>{
//     res.send('<h1>This is users page</h1>');
// });

// some advance routing
route.get('/users',reqFilter,(req,res)=>{
    res.send('<h1>This is users page</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>');
});

app.use('/',route);


// similarly we can apply route level middleware in two routes

app.listen(4500);