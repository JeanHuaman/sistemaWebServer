

const { validateCurso} = require("../middlewares/validator/curso");
const cursoService = require("../services/cursoService")



const getAllCurso = async (req,res)=>{
  try{
    const allCurso = await cursoService.getAllCurso();
    console.log(allCurso);
    res.json({status:200,cursos:allCurso})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

// const getUsuariosRol = async (req,res)=>{
//     try{
//       const rol = req.params.rol
//       const allUsuarioRol = await usuarioService.getUsuariosRol(rol)
//       res.json({status:200,usuarios:allUsuarioRol})

//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

const createCurso = async (req,res)=>{
    try{
        let curso = req.body
        

        if(Object.entries(curso).length === 0) throw {message:"Error, el request está vacio"}

        const {error} = validateCurso(curso)
          
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
     
        const id_curso = await cursoService.postCurso(curso)
        res.json({status:200,message:"Curso creado exitosamente",id_curso})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}

const putCurso = async (req,res)=>{
    try{
      let curso = req.body
      const {id_curso} = curso
      console.log(curso);
      if(Object.entries(curso).length === 0) throw {message:"Error, el request está vacio"}
      if(isNaN(id_curso) || id_curso===null) throw {message:`El id '${id_curso}' no es un número`}
      
      const {error} = validateCurso(curso)
          
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
            throw {message:ErrorMessage}
        }
      
     await cursoService.putCurso(curso)
    
     res.json({status:200,message:"Curso actualizado correctamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const deleteCurso = async (req,res)=>{
    try{
       const {cursoId} = req.params
       if(isNaN(cursoId) || cursoId===null) throw {message:`El id '${cursoId}' no es un número`}
    
      await cursoService.deleteCurso(cursoId)
      res.json({status:200,message:"Curso eliminado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

module.exports = {
    getAllCurso,
    createCurso,
//   getUsuariosRol,
  putCurso,
  deleteCurso
}