

const { validateUsuario } = require("../middlewares/validator/usuario");
const {validateAlumno} = require("../middlewares/validator/alumno")
const usuarioService = require("../services/usuarioService")



const getAllUsuario = async (req,res)=>{
  try{
    const allUsuario = await usuarioService.getAllUsuario();
    res.json({status:200,usuarios:allUsuario})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

// const getUsuarioId = async (req,res)=>{
//     try{
//       const id = req.params.administradorId
//       if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
//       const OneAdministrador = await administradorService.getAdministradorId(id)
      
//       if(OneAdministrador.length == 0) throw {message:`Administrador número '${id}' no está registrado en el sistema`}
//       res.json(OneAdministrador)

//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

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
        res.json({status:200,message:"Administrador creado exitosamente",id_usuario})
    }catch(error){
      console.log(error);
      res.status(400).json({status:400,...error})
      } 
}

// const putAdministrador = async (req,res)=>{
//     try{
//       let administrador = req.body
//       const id = req.params.administradorId

//       if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
//       const OneAdministrador = await administradorService.getAdministradorId(id)
      
//       if(OneAdministrador.length == 0) throw {message:`Administrador número '${id}' no está registrado en el sistema`}
      
//       const {error,value} = validateAdministrador(administrador)
        
//         if(error){
//             let errorMessage=""
//             errorMessage = errorMessage + error.details.map(el=>el.message)
//             throw {message:errorMessage}
//         }

//       await administradorService.putAdministrador(administrador,id)
        
//       res.json({messages : "Administrador actualizado correctamente",administrador})
//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

// const deleteAdministrador = async (req,res)=>{
//     try{
//        const id = req.params.administradorId
//       if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
//       const OneAdministrador = await administradorService.getAdministradorId(id)
      
//       if(OneAdministrador.length == 0) throw {message:`Administrador número '${id}' no está registrado en el sistema`}

//       await administradorService.deleteAdministrador(id)
//       res.json({status:200,message:"Administrador eliminado exitosamente"})
//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

module.exports = {
  getAllUsuario,
  createUsuario,
  // postAdministrador,
  // putAdministrador,
  // deleteAdministrador
}