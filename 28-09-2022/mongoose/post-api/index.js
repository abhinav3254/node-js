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

app.listen(4500);