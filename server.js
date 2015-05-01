var http = require("http");

function start (portProvided) {
	// request handler
	function onRequest (request, response) {

		response.writeHead(200, {'Content-Type':'text/plain'});
		response.write("Hello World!");
		response.end();
	}

	// start the server with the callback
	var port = portProvided || 8888;
	http.createServer(onRequest).listen(port);

	console.log("** Server Started on port " + port + " **");
}



exports.start = start;