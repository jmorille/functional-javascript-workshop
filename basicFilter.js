'use strict'


module.exports = function getShortMessages(messages) {
  // SOLUTION GOES HERE 
 return  messages.filter(function(msg) { 
  	return msg.message.length  < 50;
  }).map(function(msg) { 
 	return msg.message;
 });
}

