dotEnv=require('dotenv');

//configure dotEnv
dotEnv.config();
//secret key
let jwtSKey=process.env.JWT_SECRET_KEY;
console.log(jwtSKey)

//mongo db local URL 

let loclUrl=process.env.MONGO_DB_LOCAL_URL
console.log(loclUrl);