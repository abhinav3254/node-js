var http = require('http');

const data = require('./data');

http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'application\json'});
    response.write(JSON.stringify(data));
    response.end();
}).listen(4040);

// http.createServer((req,res) => {
//     res.writeHead()
// })