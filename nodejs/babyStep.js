

'use strict';


//console.log("Process", process.argv);


var sum=  process.argv.slice(2).reduce(function (acc, val) {
    return acc + +val;
}, 0);

console.log(sum);