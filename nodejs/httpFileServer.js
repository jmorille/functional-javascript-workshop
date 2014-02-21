'use strict';



var http = require('http');
var fs = require('fs');

console.log("process ",process.argv);


var serverPort = process.argv[2] || 8000;
var file = process.argv[3] ||  'hello world';
var server = http.createServer(function (req, response) {
    response.writeHead(200, {  'Content-Type': 'text/plain' });
    // request handling logic...
    var stream = fs.createReadStream(file);
    stream.pipe(response);

})
server.listen(serverPort);

