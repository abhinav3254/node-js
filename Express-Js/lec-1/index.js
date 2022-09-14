const express = require('express');

const app = express();

app.get('',(request,response)=>{
    console.log("data sent from the user is :- ",request.query);
    response.send('Hello this is Home Page');
});

app.get('/about',(request,response)=>{
    response.send("This is about us page");
});

app.listen(9595);