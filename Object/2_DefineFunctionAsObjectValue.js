//Object Person
var person = {
    name:'Jon',
    like: function () {
        return 'Fruits';
    },
    play: function () {
        return 'Cricket';
    }
};

var likeWhat = person.like();
console.log(likeWhat);

var wishToPlay = person.play();
console.log(wishToPlay);