const express = require('express');
require('./database/db-config');
const product = require('./schema/schema');
const app = express();
const port = 4500;

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await product.find();
    console.log(data);
    res.send(data);
})

app.listen(port, () => {
    console.log(`API is on port ${port}`);
});