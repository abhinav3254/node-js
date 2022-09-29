const express = require('express');
require('./db-config');

const product = require('./product-schema');

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    console.log(req.body);
    let data = new product(req.body);
    let result = await data.save();

    res.send(result);
});

app.get('/get', async (req, res) => {
    let result = await product.find();
    res.send(result);
});

app.put('/update/:name', async (req, res) => {
    let data = await product.updateOne(
        req.params,
        {
            $set: req.body

        }
    );

    res.send(data);
});

app.delete('/delete/:price', async (req, res) => {
    let data = await product.deleteOne(
        {
            price: req.params.price
        }
    );
    res.send(data);

    // console.log(req.params);
    // res.send('done');
});

app.listen(4500);


// time stamp := 07:18:41