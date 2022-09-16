const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database_name = 'school';

const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database_name);
    return db.collection('students');
}


module.exports = dbConnect;