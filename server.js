var http = require("http"),
	url = require("url"),
	formidable = require("formidable");

function start (portProvided, route, handle) {
	// request handler
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		console.log('request for ' + pathname + ' recieved.');
		
		request.setEncoding("utf-8");

		request.addListener("data", function(chunk) {
			postData += chunk;
			console.log("Recieved post data chunk " + chunk);
		});

		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}

	// start the server with the callback
	var port = portProvided || 8888;
	http.createServer(onRequest).listen(port);

	console.log("** Server Started on port " + port + " **");
}



exports.start = start;