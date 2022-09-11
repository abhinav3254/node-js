// Making a simple API

// console.log('Making a simple API');

// If we sending anything then we have to use response
// And if we are recieving anything from the user then we have to use request.

const http = require('http');
const newData = require('./new.js');

const data = {
    'name' : 'abhinav',
    'last' : 'jha',
    'email': 'abhinav@email.com',
    'dob' : 'xx/xx/xxxx',
    'work' : 'student'
};

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'application\json'});
    // res.write(JSON.stringify(data));
    res.write(JSON.stringify(newData));
    res.end();
}).listen(4500);

// writeHead has two things in the parameter 
// 1. called as status code ,i.e. it may have 200 , 404 for error , 201 used for created and 500 for error in server
// 2. called as what type of data we want to send , here we are sending json type of data.