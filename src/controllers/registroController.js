

const { validateSubcapacidad} = require("../middlewares/validator/subcapacidad");
const { validateCapacidad} = require("../middlewares/validator/capacidad");
const { validateBimestre} = require("../middlewares/validator/bimestre");
const {validateNotaFinal} = require("../middlewares/validator/notafinal")
const registroService = require("../services/registroService")



const getNotasRegistro = async (req,res)=>{
  try{
    const {id_registro} = req.params
    const allNotasRegistro = await registroService.getallNotasRegistro(id_registro);
    res.json({status:200,allNotasRegistro})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}


const getNotasDelAlumno = async (req,res)=>{
  try{
    const datos = req.query
    const allNotasDelAlumno= await registroService.getNotasDelAlumno(datos);
    res.json({status:200,allNotasDelAlumno})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}
const getNotasFinales = async (req,res)=>{
  try{
    const {id_registro} = req.params
    const allNotasFinales= await registroService.getNotasFinales(id_registro);
    res.json({status:200,allNotasFinales})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}


const getNotaFinalPorAlumno = async (req,res)=>{
  try{
    const datos = req.query
    const notaAlumno= await registroService.getNotaFinalPorAlumno(datos);
    res.json({status:200,notaAlumno})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}
const getRegistroDelDocente = async (req,res)=>{
    try{
      const datos = req.query
      const registro = await registroService.getRegistroDelDocente(datos);
      res.json({status:200,registro})

    }catch(error){
      res.status(400).json({status:400,...error})
    }
}


const guardarNotaCapacidad = async (req,res)=>{
  try{
      let requestNotaCapacidad = req.body

      const {error} = validateCapacidad(requestNotaCapacidad)
        
      if(error){
          let ErrorMessage=""
          ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
          throw {message:ErrorMessage}
      }
   
      const id_registro_nota = await registroService.guardarNotaCapacidad(requestNotaCapacidad)
      res.json({status:200,message:"Nota capacidad guardado.",id_registro_nota})
  }catch(error){
    res.status(400).json({status:400,...error})
    } 
}

const guardarNotaSubcapacidad = async (req,res)=>{
  try{
      let requestNotaSubcapacidad = req.body
      
      console.log(requestNotaSubcapacidad);
      const {error} = validateSubcapacidad(requestNotaSubcapacidad)
        
      if(error){
          let ErrorMessage=""
          ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
          throw {message:ErrorMessage}
      }
      
      const id_registro_nota = await registroService.guardarNotaSubcapacidad(requestNotaSubcapacidad)
      res.json({status:200,message:"Nota subcapacidad guardado.",id_registro_nota})
  }catch(error){
    res.status(400).json({status:400,...error})
    } 
}


const guardarNotaBimestre = async (req,res)=>{
  try{
      let requestNotaBimestre = req.body
      

      const {error} = validateBimestre(requestNotaBimestre)
        
      if(error){
          let ErrorMessage=""
          ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
          throw {message:ErrorMessage}
      }
   
      const id_registro_nota = await registroService.guardarNotaBimestre(requestNotaBimestre)
      res.json({status:200,message:"Nota bimestre guardado.",id_registro_nota})
  }catch(error){
    res.status(400).json({status:400,...error})
    } 
}

const guardarNotaFinal = async (req,res)=>{
  try{
      let requestNotaFinal = req.body
      

      const {error} = validateNotaFinal(requestNotaFinal)
        
      if(error){
          let ErrorMessage=""
          ErrorMessage = ErrorMessage + error.details.map(el=>el.message)           
          throw {message:ErrorMessage}
      }
   
      const id_registro_nota = await registroService.guardarNotaFinal(requestNotaFinal)
      res.json({status:200,message:"Nota final guardado.",id_registro_nota})
  }catch(error){
    res.status(400).json({status:400,...error})
    } 
}
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
    getNotasRegistro,
    createRegistro,
    getRegistroDelDocente,
    guardarNotaSubcapacidad,
    guardarNotaCapacidad,
    guardarNotaBimestre,
    guardarNotaFinal,
    getNotasFinales,
    getNotasDelAlumno,
    getNotaFinalPorAlumno
}