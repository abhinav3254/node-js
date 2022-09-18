const express = require('express');
require('./config');
const Product = require('./products');

const app = express();

app.use(express.json());
app.post('/done', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(req.body);
});

app.listen(4500);