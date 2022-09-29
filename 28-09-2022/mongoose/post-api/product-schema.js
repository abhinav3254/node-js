const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    model: String,
    price: String,
    category: String
});

module.exports = mongoose.model('products', productSchema);