var user = {
    data: [
        {
            name: 'Kashish',
            age: 24
        },
        {
            name: 'Shubham',
            age: 21
        }
    ],
    showData: function (index) {
        if (index < this.data.length) {
            console.log('Name: ', this.data[index].name, ' Age: ', this.data[index].age);
        } else {
            console.log('Warning: Index out of bound.');
        }
    }
};
user.showData(1);

/*Here we are trying to Borrow showData method*/
var teacher = {
    data: [
        {
            name: 'Alok Ji',
            age: 45
        },
        {
            name: 'Anukul Sir',
            age: 55
        }
    ]
};

//Here a copy of method is assign to "printData" variable.
var printData = user.showData.bind(teacher);

console.log(printData + '');
printData(0);
