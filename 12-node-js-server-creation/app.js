const http=require('http');

const hostname='127.0.0.1';
const port=5000;
const server=http.createServer((request,response)=>{
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
   response.statusCode=200;
   response.setHeader('Content-type','text/plain');
   response.end('<h1 style="color:green">Welcom to Node Js </h1>');
});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});

