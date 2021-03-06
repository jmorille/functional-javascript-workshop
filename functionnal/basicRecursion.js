
'use strict';



function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    // if (arr.length<1) return initial;
    //var previous = fn(arr.slice(1,1), initial);
    //return reduce(arr.slice(1), fn, previous);
    return (function reduceOne(index, value) {
        if (index >= arr.length) return value;
        return reduceOne(index+1, fn(value, arr[index], index, arr));
    })(0, initial);

}

module.exports = reduce;

