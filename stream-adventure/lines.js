var through = require('through');
var split = require('split');


var upper = through(function write (buf) {
    this.queue( buf.toString().toLocaleUpperCase());
    this.queue('\n');
    this.queue( buf.toString().toLocaleLowerCase());
    this.queue('\n');
});

process.stdin.pipe(split()).pipe(upper).pipe(process.stdout);