

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
            //  done: a Function that expects an Array of user objects (as retrieved from `load`).
            if (expectedCount<=0) { return done(users); }
      //     console.log('read missing',  expectedCount , ' ==> users', users);
        });
      //  return {'index': index, 'userId': userId};
    });
 }

module.exports = loadUsers
