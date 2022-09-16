const express = require('express');
const dbConnect = require('./mongodb');
const mongoDb = require('mongodb');

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

app.put('/:name', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    );
    res.send({ result: 'update' });
});

// Delete
app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongoDb.ObjectId(req.params.id) });
    res.send(result);
})


app.listen(4500);