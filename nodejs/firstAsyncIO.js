

'use strict';

var fs = require('fs');

var fileName=  process.argv[2];
fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) throw err;
    var content = data.split(/\n/);
    var result = content.length-1;
    console.log(result);

});
//console.log("***", line);


