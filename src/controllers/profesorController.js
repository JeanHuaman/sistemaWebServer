

const { validateUsuario } = require("../middlewares/validator/administrador");
const profesorService = require("../services/profesorService")

const getAllProfesores = async (req,res)=>{
  try{
      
    const allProfesor = await profesorService.getAllProfesor();
    res.json(allProfesor)

  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

const getProfesorId = async (req,res)=>{
    try{
      const id = req.params.alumnoId
      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneProfesor = await profesorService.getProfesorId(id)
      
      if(OneProfesor.length == 0) throw {message:`Profesor número '${id}' no está registrado en el sistema`}
      res.json(OneProfesor)

    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const postProfesor = async (req,res)=>{
    try{
        let profesor = req.body 
        const {error,value} = validateUsuario(profesor)
        
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)        
            throw {message:ErrorMessage}
        }
        await profesorService.postProfesor(profesor)
        res.json({status:200,message:"Administrador creado exitosamente",profesor})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}

const putAlumno = async (req,res)=>{
    try{
      let alumno = req.body
      const id = req.params.alumnoId

      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneAlumno = await alumnoService.getAlumnoId(id)      
      if(OneAlumno.length == 0) throw {message:`Alumno número '${id}' no está registrado en el sistema`}
      
      const {error,value} = validateAlumno(alumno)
        
        if(error){
            let errorMessage=""
            errorMessage = errorMessage + error.details.map(el=>el.message)
            throw {message:errorMessage}
        }

      await alumnoService.putAlumno(alumno,id)
        
      res.json({messages : "Alumno actualizado correctamente",alumno})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const deleteAlumno = async (req,res)=>{
    try{
      const id = req.params.alumnoId

      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneAlumno = await alumnoService.getAlumnoId(id)      
      if(OneAlumno.length == 0) throw {message:`Alumno número '${id}' no está registrado en el sistema`}
      
      await alumnoService.deleteAlumno(id)
      res.json({status:200,message:"Alumno eliminado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

module.exports = {
  getAllProfesores,
  getProfesorId,
  postProfesor,
    putAlumno,
    deleteAlumno
}