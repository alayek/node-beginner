var http = require("http");

function onRequest (request, response) {
	// body...
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write("Hello World!");
	response.end();
}

http.createServer(onRequest).listen(8888);

console.log("** Server Started on port 8888**");