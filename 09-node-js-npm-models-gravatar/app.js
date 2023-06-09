let gravatar=require('gravatar');

let user={
    id:'AAAFF01',
    name:'musab',
    email:'musab.katry@gmail.com',
    password:'Admin!@#321',
    image:''
}

let image=gravatar.url(user.email,{
    s:400,
    r:'pg',
    d:'mm'
},true);

user.image=image;
console.log(user);