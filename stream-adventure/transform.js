var through = require('through');


var upper = through(function write (buf) {
    this.queue( buf.toString().toLocaleUpperCase());
});

process.stdin.pipe(upper).pipe(process.stdout);