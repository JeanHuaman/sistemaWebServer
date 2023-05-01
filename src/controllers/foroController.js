const { validateComentarioForo} = require("../middlewares/validator/comentarioForo");
const { validateForo} = require("../middlewares/validator/foro");
const foroService = require("../services/foroService")



const getAllForosPorCurso = async (req,res)=>{
  try{
    const datos = req.query
    const foros = await foroService.getAllForosPorCurso(datos);
    res.json({status:200,foros})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

const getAllForosComentados = async (req,res)=>{
    try{
      const foroId =req.params.foroId;
      const foro = await foroService.getAllForosComentados(foroId);
      res.json({status:200,foro})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const createForo = async (req,res)=>{
    try{
        let foro = req.body
        if(Object.entries(foro).length === 0) throw {message:"Error, el request está vacio"}
        
        const {error} = validateForo(foro)
        
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
       const respuesta = await foroService.postForo(foro)
       res.json({status:200,message:"Foro creado exitosamente",id_foro:respuesta})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}

const comentarForo = async (req,res)=>{
  try{
      let comentarioForo = req.body
       
      if(Object.entries(comentarioForo).length === 0) throw {message:"Error, el request está vacio"}

      const {error} = validateComentarioForo(comentarioForo)
    
      if(error){
          let ErrorMessage=""
          ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
          throw {message:ErrorMessage}
      }
     const respuesta = await foroService.postComentarForo(comentarioForo)
     res.json({status:200,message:"Comentario exitoso"})
  }catch(error){
    res.status(400).json({status:400,...error})
    } 
}

const putForo = async (req,res)=>{
    try{
        const foro = req.body;
        if(Object.entries(foro).length === 0) throw {message:"Error, el request está vacio"}

        const {error} = validateForo(foro)
      
          
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
        await foroService.putForo(foro)
        res.json({status:200,message:"Curso actualizado exitosamente"})
    }catch(error){
        res.status(400).json({status:400,...error})   
    }
}

const deleteForo = async (req,res)=>{
    try{
      const foroId =req.params.foroId;
      if(isNaN(foroId) || foroId===null) throw {message:`El id '${foroId}' no es un número`}
    
      const respuesta = await foroService.deleteForo(foroId)
      res.json({status:200,message:"Foro eliminado exitosamente",isDelete:respuesta})
    }catch(error){
      res.status(400).json({status:400,...error})   
    }
}

module.exports = {
    getAllForosPorCurso,
    createForo,
    comentarForo,
    putForo,
    getAllForosComentados,
    deleteForo
}