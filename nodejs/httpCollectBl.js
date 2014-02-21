'use strict';

var htto = require('http');
var bl = require('bl');


var url = process.argv[2];


htto.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.log(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));

});