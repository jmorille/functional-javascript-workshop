
'use strict'


function duckCount() {
    // SOLUTION GOES HERE
    var args = Array.prototype.slice.call(arguments);
    console.log("args", args);
    //  Object.prototype.hasOwnProperty.call(object, 'quack')
}

module.exports = duckCount