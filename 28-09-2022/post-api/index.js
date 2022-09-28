const express = require('express');
const dbConnect = require('./mongodb');

const app = express();


// middle ware used here
app.use(express.json());

app.post('/', async (req, res) => {
    console.log(req.body)

    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    res.send(result);
})

app.listen(4500);

// Time stamp in the video is : - 06:07:03