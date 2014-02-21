

var concat = require('concat-stream');

var reverse = concat(function (buf) {
    var rev = buf.toString().split('').reverse().join('');
    console.log(rev);
});

process.stdin.pipe(reverse);
