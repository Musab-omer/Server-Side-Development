
const util=require('./util/gretting')
const revSt =require('./util-string/utilites');

//util.greet('musab');
let message=util.greet('Amna Abdallah');
let revString=revSt.revString(message);
console.log(message);
console.log(revString);