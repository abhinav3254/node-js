// This manage the server request
const http = require('http');

// Creating a server and running it on server on the 4000 port number

// lambda function
http.createServer((request,response) => {
    response.write("<h1>Hello This is abhinav</h1>");
    response.end();
}).listen(4000);


// create server takes a function as a parameter


// Making the above this little bit simple

function dataControl (request,response) {
    response.write("Welcome to Node Js");
    response.end();
}
http.createServer(dataControl).listen(4000);