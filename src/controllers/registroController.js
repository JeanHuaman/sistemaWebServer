

const { validateCurso} = require("../middlewares/validator/curso");
const registroService = require("../services/registroService")



// const getAllCurso = async (req,res)=>{
//   try{
//     const allCurso = await cursoService.getAllCurso();
//     res.json({status:200,cursos:allCurso})
//   }catch(error){
//     res.status(400).json({status:400,...error})
//   }
// }

// const getCursos = async (req,res)=>{
//     try{
//       const allCurso = await cursoService.getCursos();
//       res.json({status:200,cursos:allCurso})

//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

const createRegistro = async (req,res)=>{
    try{
        let registro = req.body
        

        // if(Object.entries(curso).length === 0) throw {message:"Error, el request está vacio"}

        // const {error} = validateCurso(curso)
          
        // if(error){
        //     let ErrorMessage=""
        //     ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
        //     throw {message:ErrorMessage}
        // }
     
        const id_registro = await registroService.postRegistro(registro)
        res.json({status:200,message:"Registro creado exitosamente",id_registro})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}

// const putCurso = async (req,res)=>{
//     try{
//       let curso = req.body
//       const {id_curso} = curso
//       console.log(curso);
//       if(Object.entries(curso).length === 0) throw {message:"Error, el request está vacio"}
//       if(isNaN(id_curso) || id_curso===null) throw {message:`El id '${id_curso}' no es un número`}
      
//       const {error} = validateCurso(curso)
          
//         if(error){
//             let ErrorMessage=""
//             ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
//             throw {message:ErrorMessage}
//         }
      
//      await cursoService.putCurso(curso)
    
//      res.json({status:200,message:"Curso actualizado correctamente"})
//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

// const deleteCurso = async (req,res)=>{
//     try{
//        const {cursoId} = req.params
//        if(isNaN(cursoId) || cursoId===null) throw {message:`El id '${cursoId}' no es un número`}
    
//       await cursoService.deleteCurso(cursoId)
//       res.json({status:200,message:"Curso eliminado exitosamente"})
//     }catch(error){
//       res.status(400).json({status:400,...error})
//     }
// }

module.exports = {
//     getAllCurso,
    createRegistro,
//   getCursos,
//   putCurso,
//   deleteCurso
}