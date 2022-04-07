const http = require('http');


http.createServer((request,responce) => {
    responce.write("<h1>Hello Abhinav</h1>");
    responce.write('Hello Abhinav this is server made in Node')
    responce.end();
}).listen(4000);