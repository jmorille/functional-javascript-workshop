'use strict';


module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(result, item) {
        return result.concat(fn(item));
    }, []);
}
