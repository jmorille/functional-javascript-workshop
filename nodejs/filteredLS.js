

'use strict';

var fs = require('fs');
var path = require('path');

var directory =  process.argv[2];
var ext = '.' +  process.argv[3];
//console.log(  "path", path, "ext", ext);

fs.readdir(directory, function(err, list) {
    if (err) throw err;

    list.filter(function(file) {
        return path.extname(file) === ext;
    }).forEach(function(item) {
        console.log(item);
    });

});
//console.log("***", line);


