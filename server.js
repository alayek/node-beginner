var http = require("http"),
	url = require("url");

function start (portProvided, route, handle) {
	// request handler
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		route(handle, pathname, request, response);
	}

	// start the server with the callback
	var port = portProvided || 8888;
	http.createServer(onRequest).listen(port);

	console.log("** Server Started on port " + port + " **");
}



exports.start = start;