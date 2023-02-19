

const { validateAlumno } = require("../middlewares/validator/alumno");
const alumnoService = require("../services/alumnoService")

const getAllAlumnos = async (req,res)=>{
  try{
      
    const allAdministrador = await alumnoService.getAllAlumnos();
    res.json(allAdministrador)

  }catch(error){
    res.status(400).json({status:400,...error})
  }
}

const getAlumnoId = async (req,res)=>{
    try{
      const id = req.params.alumnoId
      if(isNaN(id)) throw {message:`El id '${id}' no es un número`}
      const OneAlumno = await alumnoService.getAlumnoId(id)
      
      if(OneAlumno.length == 0) throw {message:`Alumno número '${id}' no está registrado en el sistema`}
      res.json(OneAlumno)

    }catch(error){
      res.status(400).json({status:400,...error})
    }
}

const postAlumno = async (req,res)=>{
    try{
        let alumno = req.body 
        const {error,value} = validateAlumno(alumno)
        
        if(error){
            let ErrorMessage=""
            ErrorMessage = ErrorMessage + error.details.map(el=>el.message)        
            throw {message:ErrorMessage}
        }
        await alumnoService.postAlumno(alumno)
        res.json({status:200,message:"Administrador creado exitosamente",alumno})
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
    getAllAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno,
    deleteAlumno
}