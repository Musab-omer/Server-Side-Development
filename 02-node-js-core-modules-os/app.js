const os = require('node:os');

// main direcotry
let minDir=os.homedir();
console.log(`This Main Directory is : ${minDir}`);

//computer name 
let cName=os.hostname();
console.log(`Computer name is : ${cName}`);

// platform 
let pform=os.platform();
console.log(`plat form is :${pform}`);

//total memory 
let tMemory=os.totalmem();
console.log(`Total Memory : ${tMemory}`);

//free memory
let fMemory=os.freemem();
console.log(`Free Memory : ${fMemory}`)


