//Define Person Class in Good Way
function Person(yourName) {
    this.name = yourName;
    this.play = 'I dont like to play';
}
Person.prototype.likeToPlay = function (game) {
    this.play = game;
};
Person.prototype.playWhichGame = function () {
    return this.play;
};

var jasmine = new Person('Jasmine');
var loveToPlay = jasmine.playWhichGame();
console.log(loveToPlay);

var raj = new Person('Raj');
raj.likeToPlay('Cricket');
var gameName = raj.playWhichGame();
console.log(gameName);