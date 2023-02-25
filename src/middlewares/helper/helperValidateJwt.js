import {security} from "../../config"
const jwt = require("jsonwebtoken")
export const helperValidateJwt = ()=>{
    const catchToken = (req,res,next)=>{
        try {
            const bearerHeader = req.headers["authorization"]
        
            if(typeof bearerHeader === 'undefined') throw {status:403,message:`Usuario no permitido`}
            const bearerToken = bearerHeader.split(" ")[1]
            req.token =  bearerToken
            jwt.verify(req.token,security.secretKey,(error)=>{
                if(error) throw {status:403,message:`Usuario no permitido`}            
                next()
            })
                    
        } catch (error) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.status(403).json(error)
        }
      }
      return{
        catchToken
      }
}