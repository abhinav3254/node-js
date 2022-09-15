// const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// both of them are same we can use any one

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db('e-comm')
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();