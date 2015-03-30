function databaseAccess() {

    var data = {
        status: true,
        message: 'User Successfully Created',
        count: 0
    };
    //Accessing some data from database.
    setTimeout(function () {
        console.log('Some internal processing...');
        data.count = 100;
    }, 5000);

    return data;
}

var userStatus = databaseAccess();
console.log(userStatus);