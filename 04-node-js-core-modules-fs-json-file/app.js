let fs=require('node:fs');

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
];

//wriet to json file format
fs.writeFile('studens.json',JSON.stringify(student),(err)=>{
    if(err) throw err;
    console.log('file has been written');
})

//read json file content

fs.readFile('studens.json','utf-8',(err,data)=>{
    if(err) throw err;
    let students=JSON.parse(data);
    console.log(students);
})
