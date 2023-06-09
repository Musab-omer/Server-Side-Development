const http=require('http');
const fs=require('fs');
const path=require('path');

const hostname="127.0.0.1";
const port=5000;

let server =http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('Content-type','text/html');
    fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>{
        if(err) throw err;
        response.end(data);
    })
 
});

server.listen(port,hostname,()=>{
    console.log(`Server running on http://${hostname}:${port}/`);
})