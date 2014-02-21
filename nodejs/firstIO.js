

'use strict';

var fs = require('fs');

var fileName=  process.argv[2];
var buff = fs.readFileSync(fileName);
var line = buff.toString().split(/\n/);
//console.log("***", line);

console.log(line.length-1);