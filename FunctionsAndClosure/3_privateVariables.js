function Person() {
    var _name;

    return {
        getName: function () {
            return _name;
        },
        setName: function (name) {
            _name = name;
        }
    }
}

var kashish = Person();

console.log(kashish.getName());
kashish.setName('Kashish');
console.log(kashish.getName());