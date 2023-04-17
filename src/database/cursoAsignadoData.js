import {getConnection} from "../database/database"

const getAllCursosAsignados= async ()=>{
    try{
        const connection = await  getConnection();
        const cursos = await connection.query("call obtener_cursosAsignados()")
        return cursos[0]
    }catch(error){
        return error
    }
    
}

const getAllCursosAsignadosId= async (id)=>{
    try{
        const connection = await  getConnection();
        const cursos = await connection.query("call obtener_cursoAsignado_idUsuario(?)",id)
        return cursos[0]
    }catch(error){
        return error
    }
    
}
const createCursoAsignado = async (cursoAsignado)=>{
    try{
        const connection = await  getConnection();
        const {id_curso,id_docente,grado,seccion,ciclo,alumnos} = cursoAsignado
        const id_cursoAsignado = await Promise.all(
            alumnos.map(async el=>{
                try {
                    return await connection.query("call create_cursoAsignado(?,?,?,?,?,?)",[id_curso,el.id_alumno,id_docente,grado,seccion,ciclo])                
            
                } catch (error) {
                    return error
                }            
            })
          )
        
        return id_cursoAsignado[0][0][0].valor
    }catch(error){
        return error
    }   
}



const deleteCursoAsignado = async (datos)=>{
    try {
        const connection = await  getConnection();
        const result = await connection.query("call delete_cursoAsignado(?,?,?,?,?)",[datos.id_curso,datos.id_docente,datos.grado,datos.seccion,datos.ciclo])
        return result   
    } catch (error) {
        return error 
    }
    
}

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
    getAllCursosAsignados,
    createCursoAsignado,
    getAllCursosAsignadosId,
    deleteCursoAsignado,
    // updateCurso
}