
const db = require('./mongodb');    
// const db = require('../mongodb'); //on the global level   


// Easy and 2nd way to handle async
const main = async () => {
    // console.log("main function called");
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
// console.log(dbConnect());
main();