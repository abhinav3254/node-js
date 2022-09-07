const http = require('http');
const data = require('./data');

const dataArray = require('./data');
http.createServer((request,response) => {
    // since we are sending data here so we will write responce
    // if we take the data then we will write request
    response.writeHead(200,{'Content-Type':'application\json'});
    // 200 is status and there are various status
    // writing the body
    response.write(JSON.stringify(dataArray));
    // ending the responce that we have finished our work
    response.end();
}).listen(4000);