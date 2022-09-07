// Making a simple server


const http = require('http');

http.createServer((request,response) => {
	response.write("<h1>Hello World</h1>");
	response.end();
}).listen(9595);




// request -> Takes something from the client using url
// response -> sends something to the client

// test(int a , int b) {

// }

// test(10,20);