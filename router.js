function route (handle, path) {
	if(typeof handle[path] === 'function'){
		return handle[path]();
	}
	else {
		console.log("No route found for your request " + path);	
		return "404 not found";
	}
	
}

exports.route = route;