import {getConnection} from "../database/database"

const getForoPorCurso= async (datos)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query(`call obtener_foros_por_curso(?,?,?,?,?)`,[datos.id_docente,datos.id_curso,datos.grado,datos.seccion,datos.ciclo])
        connection.release()
        return result[0]
    }catch(error){
        console.log(error);
        return error
    }
    
}

const getForosComentados= async (foroId)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query(`call obtener_forosComentados(?)`,foroId)
        connection.release()
        return cursos[0]
    }catch(error){
        return error
    }    
}
const createForo = async (foro)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query(`call create_foro(?,?,?,?,?,?,?,?,?,?);`,[foro.id_docente,foro.id_curso,foro.grado,foro.seccion,foro.ciclo,foro.descripcion,foro.fecha_creacion,foro.fecha_fin,foro.nombre_foro,foro.activo_ciclo])
        connection.release()
        return result[0][0].valor
    }catch(error){
        console.log(error);
        return error
    }   
}

const createComentarioForo = async (comentario)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query(`call create_comentar_foro(?,?,?,?,?,?);`,[comentario.id_foro,comentario.id_usuario,comentario.nombre_usuario_comentador,comentario.comentario,comentario.fecha_comentario,comentario.rol])
        connection.release()
        return result[0][0].valor
    }catch(error){
        console.log(error);
        return error
    }   
}

const deleteForo = async (foroId)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query("CALL delete_foro(?);",foroId)
        connection.release()
        return result[0][0].valor  
    } catch (error) {
        return error 
    }
    
}

const updateForo = async (datos)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query("call actualizar_foro(?,?,?,?,?,?)",[datos.id_foro,datos.descripcion,datos.fecha_creacion,datos.fecha_fin,datos.nombre_foro,datos.activo_ciclo])  
        connection.release()
        return result  
    } catch (error) {
        return error 
    }
    
}
module.exports = {
    getForoPorCurso,
    createForo,
    createComentarioForo,
    getForosComentados,
    deleteForo,
    updateForo
}