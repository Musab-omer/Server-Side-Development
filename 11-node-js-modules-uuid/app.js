const uuid=require('uuid');

let students =[
    {
        id:uuid.v4(),
        name:'musab',
        age:34,
        address:"cairo,egypt",
        course : 'msc.cs'
    },

    {
        id:uuid.v4(),
        name:'mohammed',
        age:24,
        address:"Helwan,egypt",
        course : 'medicen'
    },

    {
        id:uuid.v4(),
        name:'amna',
        age:20,
        address:"khartoum , sudna",
        course : 'pharmacolagy'
    },
];

console.log(students);