'use strict';

var htto = require('http');

var url = process.argv[2];


htto.get(url,function (response) {
    response.setEncoding('utf8');
    response.on('error', console.error);
    var result = '';
    var resultSize = 0;

    response.on('data', function(data) {
        result += data;
        resultSize += data.length;
    });
    response.on('end', function() {
        console.log(resultSize);
        console.log(result);
    });

});