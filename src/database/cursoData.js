import {getConnection} from "../database/database"

const getAllCurso= async ()=>{
    try{
        const connection = await  getConnection();
        const cursos = await connection.query("SELECT id_curso, nombre FROM curso")
        return cursos
    }catch(error){
        return error
    }
    
}


const createCurso = async (curso)=>{
    try{
        const connection = await  getConnection();
        const result = await connection.query(`CALL create_curso(?);`,curso.nombre)
        const id_curso = result[0][0].valor
        return id_curso
    }catch(error){
        return error
    }   
}

// const getUsuariosRol = async (rol)=>{
//     try{
//     const connection = await  getConnection();
//     const result = await connection.query("CALL obtener_usuarios(?)",rol)
//     const lista = [...result[0]]
//     return lista
//     }catch(error){
//         return error
//     }
// }

const deleteCurso = async (cursoId)=>{
    try {
        const connection = await  getConnection();
        const result = await connection.query("DELETE FROM curso WHERE id_curso = ?;",cursoId)
        return result   
    } catch (error) {
        return error 
    }
    
}

const updateCurso = async (curso)=>{
    try {
        const connection = await  getConnection();
        const result = await connection.query("UPDATE curso SET nombre = ? WHERE id_curso = ?",[curso.nombre,curso.id_curso])  
        return result  
    } catch (error) {
        return error 
    }
    
}
module.exports = {
    getAllCurso,
    createCurso,
    // getUsuariosRol,
    deleteCurso,
    updateCurso
}