var http = require("http");

function start () {
	// request handler
	function onRequest (request, response) {

		response.writeHead(200, {'Content-Type':'text/plain'});
		response.write("Hello World!");
		response.end();
	}

	// start the server with the callback
	http.createServer(onRequest).listen(8888);

	console.log("** Server Started on port 8888 **");
}



exports.start = start;