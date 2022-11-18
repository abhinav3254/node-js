const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        'name': String,
        'model': String,
        'category': String,
        'price': String,
        'inStock': Boolean
    }
);

module.exports = mongoose.model('e-comm', productSchema);