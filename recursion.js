


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
            result = result.concat(  getDependencies(node[key]) );
        });
    }
    // TODO dedoublon
    // sort result
    var sorted = result.sort(function(a, b) {
        return a.localeCompare(b);
    });
    return sorted;
//    console.log('------ sorted',sorted, ' <== ', result);
}

module.exports = getDependencies
