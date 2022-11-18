const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Abhinav'
const main = async () => {
    await mongoose.connect(url);
}