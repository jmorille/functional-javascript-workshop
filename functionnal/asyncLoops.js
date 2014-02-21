

'use strict';


function loadUsers(userIds, load, done) {

    var users = [];
    var expectedCount = userIds.length;

      userIds.forEach(function(userId, index) {
        load(userId, function(user) {
            users[index] = user;
            //  done: a Function that expects an Array of user objects (as retrieved from `load`).
            if (--expectedCount<=0) { return done(users); }
        });
    });
 }

module.exports = loadUsers
