var queryString = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start (request, response) {
	var body = '<html>' + 
		'<head><meta charset="utf-8"></head>' + 
		'<body>' + 
		'<form action="/upload" enctype="multipart/form-data" method="POST">' +
		'<input type="file" multiple="multiple" name="upload">' + 
		'<input type="submit" value="Submit File">' + 
		'</form>' +
		'</body>' + 
		'</html>';
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.write(body);
	response.end();
}

function upload (request, response) {
	console.log("About to handle a request for 'upload'");
	var form = new formidable.IncomingForm();
	console.log("about to parse");

	form.parse(request, function(error, fields, files) {
		console.log("parsing done");

		/* possible error on Windows 
		*  trying to rename an existing file
		*/
		fs.rename(files.upload.path, "/tmp/test.jpg", function(error) {
			if(error) {
				fs.unlink("/tmp/test.jpg");
				fs.rename(files.upload.path, "/tmp/test.jpg");
			}

		});

		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.write("<img src='/show'/>");
		response.end();
		

	});
}

function show (request, response) {
	console.log("About to handle a request for 'show'");
	fs.readFile('/tmp/test.jpg', "binary", function(error, data) {
		if(error) {
			response.writeHead(500, {'Content-Type' : 'text/plain'});
			response.write(error + "\n");
			response.end();
		}
		else {
			response.writeHead(200, {'Content-Type' : 'image/jpg'});
			response.write(data, "binary");
			response.end();
		}
	})
}

exports.start = start;
exports.upload = upload;
exports.show = show;
