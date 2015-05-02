function start () {
	console.log("About to handle a request for 'start'");
	return "Hello there";
}

function upload () {
	console.log("About to handle a request for 'upload'");
	return "Thank you for uploading";
}

exports.start = start;
exports.upload = upload;
