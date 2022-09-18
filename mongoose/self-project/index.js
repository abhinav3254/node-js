const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.get('/index', (req, res) => {
    console.log(req.body);
    res.render('index');
});

app.listen(4500);