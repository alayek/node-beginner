function route (handle, path, response, postData) {
	if(typeof handle[path] === 'function'){
		return handle[path](response, postData);
	}
	else {
		console.log("No route found for your request " + path);	
		response.writeHead(404, {'Content-Type' : 'text/plain'});
		response.write("404 not found");
		response.end();
	}
	
}

exports.route = route;