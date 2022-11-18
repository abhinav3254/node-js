const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Abhinav'
const main = async () => {
    await mongoose.connect(url);
    // making schema for mongoose
    const ProductSchema = new mongoose.Schema(
        {
            name: String
        }
    );
    // Here we have to give collection name
    const ProductsModel = mongoose.model('e-comm', ProductSchema)
    // Whatever operation we perform we have to make a new instance
    let data = new ProductsModel(
        {
            name: "m8"
        }
    );

    let result = await data.save();
    console.log(result);
}

main();