const { MongoClient } = require('mongodb');
const database = 'e-comm';
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection('products');
}

module.exports = dbConnect;