const express = require('express');
const dbConnect = require('./mongodb');

const mongodb = require('mongodb');

const app = express();


// middle ware used here
app.use(express.json());


app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

app.post('/', async (req, res) => {
    console.log(req.body)

    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    res.send(result);
})

// PUT request

// :model refers to what we want to update
app.put('/:model', async (req, res) => {
    console.log(req.body)
    let data = await dbConnect();
    // static way

    // let result = data.updateOne(
    //     { model: 'a7' },
    //     { $set: { price: '$150' } }
    // );

    // dynamic way

    let result = data.updateOne(
        { model: req.params.model },
        { $set: req.body }
    );

    res.send('price updated');
})

// Delete request

app.delete('/:id', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send(result);

})

app.listen(4500);

// Time stamp in the video is : - 06:23:20