const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    model: String,
    category: String
});

module.exports = mongoose.model('products', productSchema);