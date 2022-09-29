const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
    name: String,
    model: String,
    price: String,
    category: String
});

const saveInDB = async () => {

    const ProductModel = mongoose.model('products', ProductSchema);

    let data = new ProductModel(
        {
            name: 'panasonic',
            model: 'a55',
            price: '7800',
            category: 'mobile'
        }
    );

    let result = await data.save();
    console.log(result);
}

// saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);

    let data = await Product.updateOne(
        { model: 'a55' },
        {
            $set: {
                name: 'samsung',
                price: 'update price :- 9,999'
            }
        }
    );

    console.log(data);
}

// updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);

    let data = await Product.deleteOne(
        { model: 'a65' }
    );
    console.log(data);
}

// deleteInDB();

const findInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);

    let data = await Product.find();

    console.log(data);
}

findInDB();