

'use strict';


function loadUsers(userIds, load, done) {

    var users = userIds.map(function(userId) {
        var userLoaded = {};
        load(userId, function(user) {
            console.log('user', user);
          //  userLoaded = user;
        });
        return userLoaded;
    });

    return users
}

module.exports = loadUsers
