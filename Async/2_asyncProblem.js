function databaseAccess(callback) {

    var data = {
        status: true,
        message: 'User Successfully Created',
        count: 0
    };
    //Accessing some data from database.
    setTimeout(function () {
        console.log('Some internal processing...');
        data.count = 100;
        callback(data);
    }, 5000);


}

var userData;
databaseAccess(function (user) {
    userData = user;
    console.log(userData);
});
