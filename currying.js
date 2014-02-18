'use strict';


function curryN(fn, n) {
    // SOLUTION GOES HERE

    n = n || arguments.length;
    var args = Array.prototype.slice.call(arguments,0,n);
    console.log('n', n, "==> args ", args, " for arguments", arguments);
    return function() {
        //console.log('  function', " args ", args, " for arguments", arguments, " ==> ", args.concat(Array.prototype.slice.call(arguments)));
       return  fn.apply(fn, args.concat(Array.prototype.slice.call(arguments)));
    };
}

module.exports = curryN

