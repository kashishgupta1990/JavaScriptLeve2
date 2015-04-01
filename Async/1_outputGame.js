/*Ques-1*/
/*for (var x = 1; x <= 10; x++) {
 console.log('Value: ', x);
 }*/
function yo(y) {
    setTimeout(function () {
        console.log('Value: ', y);
    }, 100);
}

/*Quest-2*/
for (var x = 1; x <= 10; x++) {
    (yo)(x);
}


