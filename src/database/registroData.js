import {getConnection} from "../database/database"

// const getAllCurso= async ()=>{
//     try{
//         const connection = await  getConnection();
//         const cursos = await connection.query("CALL obtener_cursos()")
//         return cursos
//     }catch(error){
//         return error
//     }
    
// }

const getRegistroDelDocente= async (datos)=>{
    try{
        console.log(datos);
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const registro = await connection.query("call obtener_registro_delDocente(?,?,?,?,?)",[datos.id_docente,datos.id_curso,datos.grado,datos.seccion,datos.ciclo])
        connection.release()
        return registro[0][0]
    }catch(error){
        return error
    }
    
}
const createRegistro = async (registro)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        console.log(registro);
        const result = await connection.query(`call create_registro(?,?,?,?,?,?);`,[registro.id_docente,registro.id_curso,registro.grado,registro.seccion,registro.ciclo,registro.active_registro])
        connection.release()
        return result[0][0].valor
    }catch(error){
        return error
    }   
}



// const deleteCurso = async (cursoId)=>{
//     try {
//         const connection = await  getConnection();
//         const result = await connection.query("CALL delete_curso(?);",cursoId)
//         return result   
//     } catch (error) {
//         return error 
//     }
    
// }

// const updateCurso = async (curso)=>{
//     try {
//         const connection = await  getConnection();
//         const result = await connection.query("UPDATE curso SET nombre = ? WHERE id_curso = ?",[curso.nombre,curso.id_curso])  
//         return result  
//     } catch (error) {
//         return error 
//     }
    
// }
module.exports = {
    getRegistroDelDocente,
    createRegistro,
    // getCursos,
    // deleteCurso,
    // updateCurso
}