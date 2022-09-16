const dbConnect = require('../mongodb');

const insertData = async ()=>{
    const db =await dbConnect();
    const result = await db.insertOne(
        {
            name : 'samsung',
            price : 20000,
            model : 'a32',
            category : 'mobile'
        }
    )
    if (result.acknowledged) {
        console.log('Data inserted');
    } else {
        console.log("Data Not inserted");
    }
}

insertData();