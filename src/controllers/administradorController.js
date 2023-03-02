

const { validateAdministrador } = require("../middlewares/validator/usuario");
const administradorService = require("../services/administradorService")

const getAllAdministrador = async (req,res)=>{
  try{
      
    const allAdministrador = await administradorService.getAllAdministrador();
    res.json(allAdministrador)

  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

const getAdministradorId = async (req,res)=>{
    try{
      const id = req.params.administradorId
      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneAdministrador = await administradorService.getAdministradorId(id)
      
      if(OneAdministrador.length == 0) throw {message:`Administrador número '${id}' no está registrado en el sistema`}
      res.json(OneAdministrador)

    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const postAdministrador = async (req,res)=>{
    try{
        let administrador = req.body 
        const {error,value} = validateAdministrador(administrador)
        
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }

        const createAdministrador = await administradorService.postAdministrador(administrador)
        res.json({status:200,message:"Administrador creado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}

const putAdministrador = async (req,res)=>{
    try{
      let administrador = req.body
      const id = req.params.administradorId

      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneAdministrador = await administradorService.getAdministradorId(id)
      
      if(OneAdministrador.length == 0) throw {message:`Administrador número '${id}' no está registrado en el sistema`}
      
      const {error,value} = validateAdministrador(administrador)
        
        if(error){
            let errorMessage=""
            errorMessage = errorMessage + error.details.map(el=>el.message)
            throw {message:errorMessage}
        }

      await administradorService.putAdministrador(administrador,id)
        
      res.json({messages : "Administrador actualizado correctamente",administrador})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const deleteAdministrador = async (req,res)=>{
    try{
       const id = req.params.administradorId
      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneAdministrador = await administradorService.getAdministradorId(id)
      
      if(OneAdministrador.length == 0) throw {message:`Administrador número '${id}' no está registrado en el sistema`}

      await administradorService.deleteAdministrador(id)
      res.json({status:200,message:"Administrador eliminado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

module.exports = {
    getAllAdministrador,
    getAdministradorId,
    postAdministrador,
    putAdministrador,
    deleteAdministrador
}