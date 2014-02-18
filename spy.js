'use strict'

function Spy(target, method) {
    // SOLUTION GOES HERE
    var result  = { count : 0};
    var fx = target[method];
    target[method] = function() {
        result.count += 1;
        return fx.apply(this, arguments);
    };
    return result;
};

module.exports = Spy
