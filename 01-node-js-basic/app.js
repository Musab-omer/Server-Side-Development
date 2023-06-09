console.log("Hello form node js ");

let name= "musab ";
console.log(`Hello ${name}`);

let mobile ={
    prand:'sumsung',
    model:'note 9',
    price:39000,
    color:'black'
}

console.log(mobile);

let student =[
    {
        name:'musab',
        age:34,
        address:"cairo,egypt",
        course : 'msc.cs'
    },

    {
        name:'mohammed',
        age:24,
        address:"Helwan,egypt",
        course : 'medicen'
    },

    {
        name:'amna',
        age:20,
        address:"khartoum , sudna",
        course : 'pharmacolagy'
    },
]

console.table(student);

let greting=(name)=>{
    let mesg=`Hello ${name} good morning`;
    console.log(mesg);
}

greting('Ahmed Hammed');