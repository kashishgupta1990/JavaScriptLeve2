/*Closure makes variable access outside from function*/

function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";

    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }

    return lastName;
}

var person = celebrityName('Kashish');
var str = person('Gupta');
console.log(str);
