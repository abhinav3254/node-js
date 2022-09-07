
const express = require ('express')

const app = express();

app.get('',(req,res) => {
    res.send("Welcome This is Home Page");
});

app.get('/about',(req,res) => {
    res.send("This is About page");
});

app.listen(4040);