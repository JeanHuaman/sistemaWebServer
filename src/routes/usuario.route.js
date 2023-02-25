const express = require("express")
const router = express.Router();
const usuarioController = require("../controllers/usuarioController")
const jwt = require("jsonwebtoken")
const catchToken = (req,res,next)=>{
    try {
        const bearerHeader = req.headers["authorization"]
    
        if(typeof bearerHeader === 'undefined') throw {status:403,message:`Usuario no permitido`}
        const bearerToken = bearerHeader.split(" ")[1]
        req.token =  bearerToken 
        jwt.verify(req.token,"pulpopool",(error)=>{
            if(error) throw {status:403,message:`Usuario no permitido`}            
            next()
        })
                
    } catch (error) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.status(403).json(error)
    }
    // if(typeof bearerHeader !== 'undefined'){
    //     const bearerToken = bearerHeader.split(" ")[1]
    //     req.token =  bearerToken
    //     next()
    // }else{
    //     res.status(403).json({status:403,message:`Usuario no permitido`})
    // }
  }
router
    .get("/",catchToken,usuarioController.getAllUsuario)
    // .get("/:alumnoId",administradorController.getAdministradorId)
    // .post("/",administradorController.postAdministrador)
    // .put("/:alumnoId",administradorController.putAdministrador)
    // .delete("/:alumnoId",administradorController.deleteAdministrador)
module.exports = router;