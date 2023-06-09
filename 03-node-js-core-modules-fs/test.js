const fs=require('node:fs');

// read file 
let fileContent = fs.readFileSync('data.text','utf-8');


//write fiel 
fs.writeFileSync('Csharp.text',fileContent);
console.log('file writen');

//read current program 
let currentProgram = fs.readFileSync('app.js','utf-8');

//write current program to new file by name test.js

fs.writeFileSync('test.js',currentProgram);
console.log("current fiel writen to new file test.js")

