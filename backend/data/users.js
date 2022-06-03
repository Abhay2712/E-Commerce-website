const bcryptjs = require("bcryptjs")


const users=[{
    name:'Admin User',
    email:'abhaysjarma754@gmain.com',
    password:bcryptjs.hashSync('123456',10),
    isAdmin:true
},
{   
    name:'Akshat',
    email:'ak@gmail.xom',
    password:bcryptjs.hashSync('123456',10)
},
{
    name:'Gagan',
    email:'gk@gmail.xom', 
    password:bcryptjs.hashSync('123456',10)
}]

module.exports=users