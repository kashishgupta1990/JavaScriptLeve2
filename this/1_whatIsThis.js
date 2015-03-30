var person = {
    firstName: "Kashish",
    lastName: "Gupta",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
        console.log(person.firstName + " " + person.lastName);
    }
};

person.fullName();