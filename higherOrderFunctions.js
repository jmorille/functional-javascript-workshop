'use strict'

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (var index = 0; index < num; ++index) {
  	operation();
  }
}

module.exports = repeat
