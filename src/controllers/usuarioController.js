

const { validateUsuario } = require("../middlewares/validator/usuario");
const {validateAlumno} = require("../middlewares/validator/alumno")
const usuarioService = require("../services/usuarioService")



const getAllUsuario = async (req,res)=>{
  try{
    const allUsuario = await usuarioService.getAllUsuario();
    // console.log(allUsuario);
    res.json({status:200,usuarios:allUsuario})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

const getUsuariosRol = async (req,res)=>{
    try{
      const rol = req.params.rol
      const allUsuarioRol = await usuarioService.getUsuariosRol(rol)
      res.json({status:200,usuarios:allUsuarioRol})

    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const createUsuario = async (req,res)=>{
    try{
        let usuario = req.body
        let errorGeneral=null
        if(Object.entries(usuario).length === 0) throw {message:"Error, el request está vacio"}

        if(usuario.rol === "alumno"){
         const {error} = validateAlumno(usuario)
         errorGeneral = error
        } else{
          const {error} = validateUsuario(usuario)
          errorGeneral = error
        }
        
        if(errorGeneral){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + errorGeneral.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
     
        const respuestaBD = await usuarioService.postUsuario(usuario)
        const id_usuario = respuestaBD[0]["0"].valor
        if(id_usuario===-1) throw {message:"Usuario ya está registrado",id_usuario}
        res.json({status:200,message:"Usuario creado exitosamente",id_usuario})
    }catch(error){
      console.log(error);
      res.status(400).json({status:400,...error})
      } 
}

const putUsuario = async (req,res)=>{
    try{
      let usuario = req.body
      const {id_usuario} = usuario
      console.log(usuario);
      if(Object.entries(usuario).length === 0) throw {message:"Error, el request está vacio"}
      if(isNaN(id_usuario) || id_usuario===null) throw {message:`El id '${id_usuario}' no es un número`}
      
      let errorGeneral=null
       

        if(usuario.rol === "alumno"){
         const {error} = validateAlumno(usuario)
         errorGeneral = error
        } else{
          const {error} = validateUsuario(usuario)
          errorGeneral = error
        }
        
        if(errorGeneral){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + errorGeneral.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
      
     await usuarioService.putUsuario(usuario)
    
     res.json({status:200,message:"Usuario actualizado correctamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const deleteUsuario = async (req,res)=>{
    try{
      const usuariosPermitidos=["alumno","administrador","docente"]
       const {usuarioId,rol} = req.params
       if(!usuariosPermitidos.includes(rol)) throw {message:`'${rol}' no es un rol permitido`}
       if(isNaN(usuarioId) || usuarioId===null) throw {message:`El id '${usuarioId}' no es un número`}
    
      await usuarioService.deleteUsuario(usuarioId,rol)
      res.json({status:200,message:"Usuario eliminado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

module.exports = {
  getAllUsuario,
  createUsuario,
  getUsuariosRol,
  putUsuario,
  deleteUsuario
}