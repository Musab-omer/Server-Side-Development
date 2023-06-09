const bcrypt=require('bcryptjs')

let user={
    name:'musab',
    email:'musab@gmail.com',
    password:'Admin!@#321'
}

let salt =bcrypt.genSaltSync(10);
let hash =bcrypt.hashSync(user.password,salt);
console.log(hash);

let updatedUser={
    ...user,
    password:hash
}

//console.log(updatedUser);

//password gor login match 
let isMatch = bcrypt.compareSync('Admin!@#123',updatedUser.password);
if(isMatch)
console.log('user login successflly');
else 
console.log("user faild to login");
