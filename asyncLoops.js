

'use strict';


function loadUsers(userIds, load, done) {

    var users = [];
    //users[3] = { 'bobo' : 'fff'};
    var expectedCount = userIds.length;

      userIds.map(function(userId, index) {
        //console.log('userId', userId, 'index', index);
        load(userId, function(user) {
            //console.log('userId', userId, 'user', user, 'index', index);
            users[index] = user;
            --expectedCount;
      //     console.log('read missing',  expectedCount , ' ==> users', users);
        });
      //  return {'index': index, 'userId': userId};
    });

   // while ( expectedCount >0) {
       // console.log('readCount', readCount, '/', expectedCount );
   // }
    console.log('result users', users );
    return users
}

module.exports = loadUsers
