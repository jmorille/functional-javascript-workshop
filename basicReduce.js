'use strict';


function countWords(inputWords) { 
  // SOLUTION GOES HERE 
  return inputWords
  //.sort(function(a, b) { return a.localeCompare(b); })
  .reduce( function(result, word) {  
       result[word] = ++result[word] || 1;
       return result;
  }, {} ); 
}

module.exports = countWords
