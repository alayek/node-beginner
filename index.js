var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

// define routes of your app here
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start/'] = requestHandlers.start;
handle['/start'] = handle['/start/'];
handle['/upload'] = requestHandlers.upload;
handle['/upload/'] = requestHandlers.upload;
handle['/show'] = handle['/show/'] = requestHandlers.show;

server.start(8000, router.route, handle);