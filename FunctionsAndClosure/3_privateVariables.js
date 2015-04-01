function Person() {
    var _name;

    return {
        getName: function () {
            var _yo
            return _name;
        },
        setName: function (name) {
            _name = name;
        }
    }
}

var kashish = Person();

console.log(kashish.getName()); //undefin
kashish.setName('Kashish');
console.log(kashish.getName()); //kashi