var queryString = require("querystring");

function start (response, postData) {
	var body = '<html>' + 
		'<head><meta charset="utf-8"></head>' + 
		'<body>' + 
		'<form action="/upload" method="POST">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' + 
		'<input type="submit" value="Submit Text">' + 
		'</form>' +
		'</body>' + 
		'</html>';
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.write(body);
	response.end();
}

function upload (response, postData) {
	console.log("About to handle a request for 'upload'");
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write("You have sent : " + queryString.parse(postData).text);
	response.end();
}

exports.start = start;
exports.upload = upload;
