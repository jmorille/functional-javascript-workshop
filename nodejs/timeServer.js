'use strict';

var net = require('net')
var _ = require('lodash');

var strftime = require('strftime');

var serverPort = process.argv[2] || 8000;

var server = net.createServer(function (socket) {
    // socket handling logic
    var now = new Date();
    var data =   strftime('%F %H:%M', now);
    socket.write(data);
    socket.end('\n');

})
server.listen(serverPort);
