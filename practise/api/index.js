const http = require('http');

const data = require('./new_data');

http.createServer((request,response) => {
    response.writeHead(200,{'content-type':'application\json'});
    response.write(JSON.stringify(data));
}).listen(4000);