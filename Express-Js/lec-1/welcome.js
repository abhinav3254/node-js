const express = require('express');
const app = express();

app.get("",(req,res)=>{
    console.log('user name is :- ',req.query.name);
    res.send(`hello<h1>${req.query.name} </h1>have a nice day`);
});

app.listen(9594);