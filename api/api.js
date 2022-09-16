const express = require('express');
const dbConnect = require('./mongodb');

const app = express();

// used to get body from the request
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
    // console.log(req.body)

    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);

});


// put method
// put method is used to update the API

app.put('/', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.updateOne(
        { 'roll_no': req.body.roll_no },
        { $set: req.body }
    );
    res.send({ result: 'update' });
});


app.listen(4500);