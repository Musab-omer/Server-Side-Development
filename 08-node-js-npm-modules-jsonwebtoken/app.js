const jwt = require('jsonwebtoken');

let userOne = {
    id: 'AAAFF01',
    name: 'musab',
    email: 'musab@gmail.com',
    password: 'Admin!@#123'
}

let userTwo = {
    id: 'AAAFF02',
    name: 'mohammed Jally',
    email: 'mohammed@gmail.com',
    password: 'Mohammed!@#321'
}


//generate jwt token Synchronous 
let payload = {
    id: userTwo.id,
    name: userTwo.name
}
let secreatKey = 'sshhh';
let token = jwt.sign(payload, secreatKey);
console.log(token);

// veruft a token symmetric 
let decoded = jwt.verify(token, secreatKey);
console.log(decoded.name);

// generate jwt toekn Asynchronously

// jwt.sign({user:'musab'},secreatKey,{algorithm:'RS256'},(err,toekn)=>{
//     if(err) throw err;
//     console.log(token)
// });



