const dbConnect = require('../mongodb');

const deleteData = async () => {
    let db = await dbConnect();
    let result = await db.deleteOne({'model':'a7'});
    
    if (result.acknowledged) {
        console.log('data deleted');
    }
};

deleteData();