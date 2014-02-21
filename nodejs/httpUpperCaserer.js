

'use strict';



var http = require('http');
var map = require('through2-map');


var serverPort = process.argv[2] || 8000;

var upper = map(function(chunk){
    return chunk.toString().toLocaleUpperCase();
});

var server = http.createServer(function (req, response) {
    if (req.method != 'POST')
        return res.end('send me a POST\n')


    // request handling logic...

    req.pipe(upper).pipe(response);

})
server.listen(serverPort);

