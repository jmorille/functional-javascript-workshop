'use strict';


var http = require('http');
var url = require('url');

var serverPort = process.argv[2];


var server = http.createServer(function (req, res) {

    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;

    if (/^\/api\/parsetime/.test(req.url)) {
        result = { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds()   };

    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = { unixtime: time.getTime() };
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }

})
server.listen(serverPort);

