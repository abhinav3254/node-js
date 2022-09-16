const express = require('express');
const dbConnect = require('./mongodb');

const app = express();

app.use(express.json());

// get method

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});

// post method
app.post('/', async (req, res) => {
    res.send(req.body);
    console.log(req.body)
});



app.listen(4500);