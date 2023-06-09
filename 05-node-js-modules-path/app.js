const fs=require('node:fs');
const path=require('node:path');

fs.readFile(path.join(__dirname,'data','admin','data.text'),'utf-8',(err,data)=>{
    if(err) throw err;
    //console.log(data);
    fs.writeFile(path.join(__dirname,'user','userDetails','userData','users.text'),data,'utf-8',(err)=>{
        if(err) throw err;
        console.log("user data has been written!");
    })
});