'use strict';


function curryN(fn, n, previousArgs) {
    // SOLUTION GOES HERE
    n = n || fn.length;
    previousArgs = previousArgs || [];

    return  function getCurriedFn() {
        var levelArg = arguments[0];
      //  console.log('levelArg', levelArg, ' ===> n : ', n, ' previousArgs', previousArgs);
        if (n>1) {
            return curryN(fn, n-1, previousArgs.concat(levelArg));
        } else {
            return  fn.apply(fn, previousArgs.concat(levelArg));
        }
        //console.log('  function', " args ", args, " for arguments", arguments, " ==> ", args.concat(Array.prototype.slice.call(arguments)));
    };
}

module.exports = curryN

