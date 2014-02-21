'use strict';

var httoCli = require('http');
var url = process.argv[2];


httoCli.get(url,function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log)
    response.on('error', console.error)
});