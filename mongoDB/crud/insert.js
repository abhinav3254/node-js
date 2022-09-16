const dbConnect = require('./mongodb');

const insertOne = async ()=>{
    var db = await dbConnect();
    var result = await db.insertMany([
        
        {
            'name' : 'ajay',
            'roll_no' : 2,
            'class' : 6
            },
            {
                'name' : 'aadarsh',
                'roll_no' : 3,
                'class' : 6
                },
                {
                    'name' : 'aman',
                    'roll_no' : 4,
                    'class' : 6
                    },
                    {
                        'name' : 'harsh',
                        'roll_no' : 5,
                        'class' : 6
                        }
    
    ]);

    if (result.acknowledged) {
    console.log('inserted');
    }
};

insertOne();