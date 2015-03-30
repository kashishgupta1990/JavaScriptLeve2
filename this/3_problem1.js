var user = {
    tournament: "Blog of the Month",
    data: [
        {name: "Sahil", age: 25},
        {name: "Viki", age: 63}
    ],
    clickHandler: function () {
        this.data.forEach(function (person) {
            console.log("What is This referring to? " + this);
            console.log(person.name + " is going to win " + this.tournament);
        })
    }
};

user.clickHandler();