/*Lets write our API*/
function databaseOperation(callMeWhenDone) {
    setTimeout(function () {
        var userInfo = {name: 'Jasmine', password: 'igdefault'};
        callMeWhenDone(userInfo);
    }, 2000);
}

//My front-end Android Application
function getUserData() {
    var userData;

    //Hitting Database to Access User Information.
    databaseOperation(function (data) {
        userData = data;

        //I am consuming my data here
        console.log('UserData: ', userData);
    });
}

getUserData();