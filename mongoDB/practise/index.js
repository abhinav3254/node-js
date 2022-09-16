const dbConnect = require('../mongodb');

const main = async () => {
    let data = await dbConnect();
    data = await data.find({name:'karbon'}).toArray();
    console.log(`The data from the specific search is :-`);
    console.log(data);
}

main();