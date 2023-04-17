

const { validateCursoAsignado} = require("../middlewares/validator/cursoAsignado");
const cursoasignadoService = require("../services/cursoasignadoService")



const getCursosAsignados = async (req,res)=>{
  try{
    const curso_asignados = await cursoasignadoService.getAllCursosAsignados();
    res.json({status:200,curso_asignados})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

const getCursosAsignadosId = async (req,res)=>{
    try{
      const id_usuario = req.params.id_usuario
      const curso_asignados = await cursoasignadoService.getAllCursosAsignadosId(id_usuario);
      res.json({status:200,curso_asignados})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const createAsignarCurso = async (req,res)=>{
    try{
        let cursoAsignado = req.body
        
        

        if(Object.entries(cursoAsignado).length === 0) throw {message:"Error, el request está vacio"}

        const {error} = validateCursoAsignado(cursoAsignado)
      
          
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
       const respuesta = await cursoasignadoService.postCursoAsignado(cursoAsignado)
       if(respuesta!= undefined) {
         if(respuesta===-1) throw {message:"Error, el curso ya estaba asignado al docente y alumnos"}        
       }     
       res.json({status:200,message:"Curso asignado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}


const deleteCursoAsignado = async (req,res)=>{
    try{
      const datos =req.query;
    
      await cursoasignadoService.deleteCursoAsignado(datos)
      res.json({status:200,message:"Curso eliminado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})   
    }
}

module.exports = {
    getCursosAsignados,
    createAsignarCurso,
    getCursosAsignadosId,
  // putCursoAsignado,
  deleteCursoAsignado
}