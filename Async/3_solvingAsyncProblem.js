for (var x = 1; x <= 10; x++) {
    (function (x) {
        setTimeout(function () {
            console.log('Value: ', x);
        }, 100);
    })(x);
}