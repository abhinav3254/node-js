// Making a simple server


const http = require('http');

// 1. One way of creating a server using arrow function

// http.createServer((request,response) => {
// 	response.write("<h1>Hello World</h1>");
// 	response.end();
// }).listen(9595);



// 2. Second way using another function like a noob programmer basically for me :)
// Describing the arrow function

function dataControlOne(request,response) {
	response.write("<h1>Hello This is Abhinav Jha</h1>");
	response.end();
}

http.createServer(dataControlOne).listen(4500);



// request -> Takes something from the client using url
// response -> sends something to the client

// ************ Assume this is function and we have to change it in arrow function so what we have to do is *************//

// function test(int a ) {
	// return a*10;
// }

// const test = (a) => a*10;