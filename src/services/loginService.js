const loginData = require("../database/loginData")


const loginService = async (user,pass)=>{
    const usuario = await loginData.getUser(user,pass)
    return usuario;
}


module.exports ={
 loginService
}