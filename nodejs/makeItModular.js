'use strict';

var mymodule = require('./module.js');

var directory = process.argv[2];
var ext = process.argv[3];
//console.log(  "path:", directory, "ext: ", ext);
mymodule(directory, ext, function (err, data) {
    if (err)
        return console.error('There was an error:', err);
    data.forEach(function(file) {
        console.log(file);
    });
});


