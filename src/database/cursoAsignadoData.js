import {getConnection} from "../database/database"

const getAllCursosAsignados= async ()=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query("call obtener_cursosAsignados()")
        connection.release()
        return cursos[0]
    }catch(error){
        return error
    }
    
}

const getAllCursosAsignadosId= async (id)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query("call obtener_cursoAsignado_idUsuario(?)",id)
        connection.release()
        return cursos[0]
    }catch(error){
        return error
    }
    
}


const getAllCursoAsignadoIdUserIdCurso= async (id_usuario,id_curso)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query("CALL obtener_cursoAsignado_idUsuario_idCurso(?,?);",[id_usuario,id_curso])
        connection.release()
        return cursos[0]
    }catch(error){
        return error
    }
    
}

const createCursoAsignado = async (cursoAsignado)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
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
        await connection.query(`call create_registro(?,?,?,?,?,?);`,[id_docente,id_curso,grado,seccion,ciclo,1])
        connection.release()
        return id_cursoAsignado[0][0][0].valor
    }catch(error){
        return error
    }   
}



const deleteCursoAsignado = async (datos)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query("call delete_cursoAsignado(?,?,?,?,?)",[datos.id_curso,datos.id_docente,datos.grado,datos.seccion,datos.ciclo])
        return result   
    } catch (error) {
        return error 
    }
    
}

module.exports = {
    getAllCursosAsignados,
    createCursoAsignado,
    getAllCursosAsignadosId,
    deleteCursoAsignado,
    getAllCursoAsignadoIdUserIdCurso
}