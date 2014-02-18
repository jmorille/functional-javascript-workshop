


'use strict';


function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.

    var result = [];

    if (tree.hasOwnProperty("dependencies")) {
        var node = tree["dependencies"];
        Object.keys(node).forEach(function(key) {
            var depName =  key + '@' + node[key]['version'];
            result.push(depName);
            var subDeps =  getDependencies(node[key]); 
            subDeps = subDeps.filter(function(item) {
                var isFind = result.some(function(check) {
                    return (check === item);
                });
                return !isFind;
            });
            result = result.concat( subDeps );
        });
    }
    // sort result
    var sorted = result.sort(function(a, b) {
        return a.localeCompare(b);
    });
    return sorted;
//    console.log('------ sorted',sorted, ' <== ', result);
}

module.exports = getDependencies
