const fs = require('node:fs');

// // read file 
// let fileContent = fs.readFileSync('data.text','utf-8');


// //write fiel 
// fs.writeFileSync('Csharp.text',fileContent);
// console.log('file writen');

// //read current program 
// let currentProgram = fs.readFileSync('app.js','utf-8');

// //write current program to new file by name test.js

// fs.writeFileSync('test.js',currentProgram);
// console.log("current fiel writen to new file test.js")

// Async (callbacks , promises , Async-Await)
// read and write file Async 
fs.readFile('data.text', 'utf-8', (error, data) => {
    if (error) throw error;
    //write file async
    fs.writeFile('csharpInterview.text', data, (error) => {
        if (error) throw error;
        console.log('the file has been saven !');
    })
})

//write the courrent program to another file 
fs.readFile('app.js','utf-8',(err,data)=>{
    if(err) throw err;
    fs.writeFile('asyncApp.js',data,(err)=>{
        if(err) throw err;
        console.log('async file has been saved successflly');
    })
})


