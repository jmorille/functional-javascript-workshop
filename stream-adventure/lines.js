var through = require('through');
var split = require('split');


var count = 0;

var upper = through(function write(buf) {
    var line = buf.toString();
    if (++count % 2 === 0) {
        this.queue(line.toLocaleUpperCase());
    } else {
        this.queue(line.toLocaleLowerCase());
    }
    this.queue('\n');
});

process.stdin.pipe(split()).pipe(upper).pipe(process.stdout);