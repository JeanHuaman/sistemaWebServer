const { validateLogin } = require("../middlewares/validator/login");
const loginService = require("../services/loginService")
const jwt = require("jsonwebtoken")
import {security} from "./../config"



const login = async (req,res)=>{
  try{
    const {user,pass}=req.query
    const {error} = validateLogin({user,pass})
    if(error){
        let ErrorMessage=""
        ErrorMessage = ErrorMessage + error.details.map(el=>el.message)        
        throw {message:ErrorMessage}
    }

    const userAutenticada = await loginService.loginService(user,pass);
  
    if(userAutenticada.length==0) throw {message:`Usuario y/o contraseña inválidos`}
    
    jwt.sign({user,pass},security.secretKey,async (err,token)=>{
        res.json({status:200,userAutenticada,token})
    })
    
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

module.exports = {
    login
}