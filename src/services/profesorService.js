const docenteData = require("../database/profesorData")

const getAllProfesor = async ()=>{
    const AllProfesor = await docenteData.getAllProfesores()
    return AllProfesor
}
const getProfesorId = async (id)=>{
    const profesor = await docenteData.getIdProfesor(id)
    return profesor;
}
const postProfesor = async (profesor)=>{
    const createProfesor = await docenteData.createProfesor(profesor)
    return createProfesor;
}
const putAlumno = async (alumno,id)=>{
    const updateAlumno = await docenteData.updateAlumno(alumno,id)
    return updateAlumno;
}
const deleteAlumno = async (id)=>{
    const deletedAlumno = await docenteData.deleteAlumno(id)
    return deletedAlumno;
}


module.exports ={
    getAllProfesor,
    getProfesorId,
    postProfesor,
    putAlumno,
    deleteAlumno

}