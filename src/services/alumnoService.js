const alumnoData = require("../database/alumnoData")

const getAllAlumnos = async ()=>{
    const jsonAllAlumno = await alumnoData.getAllAlumnos()
    return jsonAllAlumno
}
const getAlumnoId = async (id)=>{
    const alumno = await alumnoData.getIdAlumno(id)
    //console.log(alumno);
    return alumno;
}
const postAlumno = async (alumno)=>{
    const createAlumno = await alumnoData.createAlumno(alumno)
    return createAlumno;
}
const putAlumno = async (alumno,id)=>{
    const updateAlumno = await alumnoData.updateAlumno(alumno,id)
    return updateAlumno;
}
const deleteAlumno = async (id)=>{
    const deletedAlumno = await alumnoData.deleteAlumno(id)
    return deletedAlumno;
}


module.exports ={
    getAllAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno,
    deleteAlumno

}