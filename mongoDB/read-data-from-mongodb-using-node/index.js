const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const database = 'e-comm';

const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }


// To find a specific result from the database
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    // let collection = db.collection('products');
    return db.collection('products');
    // let response = await collection.find({model:'k2'}).toArray();
    // console.log(response);
}


// One way of handling promise in node-js

dbConnect().then((res)=>{
    // console.warn(res.find().toArray())
    res.find({}).toArray().then((data)=>{
        console.warn(data);
    })
})
console.log(dbConnect());