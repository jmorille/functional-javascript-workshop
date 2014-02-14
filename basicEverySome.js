'use strict'

module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(item) {    	
    	return goodUsers.some(function(check){ 
    		return item.id === check.id;
    	});
    });
  };
}
