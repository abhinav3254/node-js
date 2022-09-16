const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    model: String,
    category: String
});

const saveInDB = async () => {
    await mongoose.connect(url);
    // making schema
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        model: String,
        category: String
    });

    const productsModel = mongoose.model('products', productSchema);
    let data = new productsModel(
        {
            name: 'huwaii',
            price: 5500,
            mode: 'k8',
            category: 'mobile'
        }
    );
    let result = await data.save();
    console.log(result);
};

const updateInDb = async () => {
    await mongoose.connect(url);
    const productsModel = mongoose.model('products', productSchema);
    let data = await productsModel.updateOne(
        { name: 'samsung', price: 9889 },
        {
            $set: { name: 'samsung', price: 19, model: 'm 14', category: 'mobile' }
        }
    );

    console.log(data);

};

updateInDb();

// saveInDB();