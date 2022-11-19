// Here we have the schema for our database
// Import the mongoose pacakge
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        // This is book API
        name: String,
        price: String,
        file: String,
        date: Date, date: {
            type: Date,
            default: Date.now()
        }
    }
);
