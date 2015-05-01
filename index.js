var server = require('./server.js')
var router = require('./router.js')

server.start(8000, router.route)