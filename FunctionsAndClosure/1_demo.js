/*In this Example we can see
* Three Scope of the closure.*/

var outOfWorld = 'I am GOD'; //Global

function Parent(){
    var totalChildren = 2; // Parent Function

    function Child(){
        var name = 'Kashish'; // Child Function

        console.log('Name: ', name);
        console.log('Parent Total Children: : ', totalChildren);
        console.log('Parent Total Children: : ', outOfWorld);
    }

    Child();
}

Parent();
