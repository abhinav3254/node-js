const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';

const main = async () => {
    await mongoose.connect(url);
    // making schema
    const productSchema = new mongoose.Schema({
        name: String
    });

    const productsModel = mongoose.model('products', productSchema);
    let data = new productsModel({ name: 'm9', price: 5500 });
    let result = await data.save();
    console.log(result);
};

main();