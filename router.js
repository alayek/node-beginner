function route (handle, path) {
	if(typeof handle[path] === 'function'){
		handle[path]();
	}
	else {
		console.log("No route found for your request " + path);	
	}
	
}

exports.route = route;