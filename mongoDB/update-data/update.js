const dbConnect = require('../mongodb');

const updateOne = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {model:'a7'},{

        $set : {name:'update-Samsung',price:8989}

        }
    );

    if (result.acknowledged) {
    console.log("updated");
    }
}

updateOne();