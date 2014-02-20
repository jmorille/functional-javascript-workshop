
'use strict';


function getDependencies(tree, result) {

    result = result || [];
    var node = tree.dependencies || {};
    Object.keys(node).forEach(function (dependence) {
       var dep= dependence + '@' + node[dependence].version;
       if (result.indexOf(dep) === -1) { result.push(dep); }
        getDependencies(node[dependence], result);
    });

    return result.sort();

}

module.exports = getDependencies
