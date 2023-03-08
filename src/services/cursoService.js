const cursoData = require("../database/cursoData")

const getAllCurso = async ()=>{
    const resultado = await cursoData.getAllCurso();
    return resultado
}
// const getUsuariosRol = async (rol)=>{
//     const usuarios = await usuarioData.getUsuariosRol(rol)
//     return usuarios;
// }
const postCurso = async (curso)=>{
    const createCurso = await cursoData.createCurso(curso)
    return createCurso;
}
const putCurso = async (curso)=>{
    const updateCurso = await cursoData.updateCurso(curso)
    return updateCurso;
}
const deleteCurso = async (cursoId)=>{
    const deleteCurso = await cursoData.deleteCurso(cursoId)
    return deleteCurso;
}


module.exports ={
    getAllCurso,
    // getUsuariosRol,
    postCurso,
    putCurso,
    deleteCurso
}