var person = {
    firstName: "Kashish",
    lastName: "Gupta",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
        console.log(person.firstName + " " + person.lastName);
    }
};

//console.log(global);

global.firstName = "Sheena";
global.lastName = "Gupta";
var fullName = person.fullName;

fullName();
