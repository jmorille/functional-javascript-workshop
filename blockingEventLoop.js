'use strict'

function repeat(operation, num, begin) {
    // modify this so it can be interrupted
    begin =  begin|| Date.now() ;
    if (num <= 0 || (Date.now() - begin )<1500 ) {
        return;
    }
  //  console.log("End repeat, ", num);
    var timeOutId = setTimeout( operation(), 0);
    setTimeout((function(timeId) {
        clearTimeout(timeId);
    })(timeOutId), 1000);
    return repeat(operation, --num, begin);
}



module.exports = repeat
