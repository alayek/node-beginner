function start () {
	console.log("About to handle a request for 'start'");

	function sleep (milliseconds) {
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliseconds);
	}

	sleep(10000);

	return "Hello there";
}

function upload () {
	console.log("About to handle a request for 'upload'");
	return "Thank you for uploading";
}

exports.start = start;
exports.upload = upload;
