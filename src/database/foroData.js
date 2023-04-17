import {getConnection} from "../database/database"

const getForoPorCurso= async (datos)=>{
    try{
        const connection = await  getConnection();
        const forosPorCurso = await connection.query(`call obtener_foros_por_curso(?,?,?,?,?);`,[datos.id_docente,datos.id_curso,datos.grado,datos.seccion,datos.ciclo])
        return forosPorCurso[0]
    }catch(error){
        return error
    }
    
}

const getForosComentados= async (foroId)=>{
    try{
        const connection = await  getConnection();
        const cursos = await connection.query(`call obtener_forosComentados(?)`,foroId)
        return cursos[0]
    }catch(error){
        return error
    }    
}
const createForo = async (foro)=>{
    try{
        const connection = await  getConnection();
        const result = await connection.query(`call create_foro(?,?,?,?,?,?,?,?,?,?);`,[foro.id_docente,foro.id_curso,foro.grado,foro.seccion,foro.ciclo,foro.descripcion,foro.fecha_creacion,foro.fecha_fin,foro.nombre_foro,foro.activo_ciclo])
        
        return result[0][0].valor
    }catch(error){
        console.log(error);
        return error
    }   
}

const createComentarioForo = async (comentario)=>{
    try{
        const connection = await  getConnection();
        const result = await connection.query(`call create_comentar_foro(?,?,?,?,?,?);`,[comentario.id_foro,comentario.id_usuario,comentario.nombre_usuario_comentador,comentario.comentario,comentario.fecha_comentario,comentario.rol])
        console.log(result);
        return result[0][0].valor
    }catch(error){
        console.log(error);
        return error
    }   
}

const deleteForo = async (foroId)=>{
    try {
        const connection = await  getConnection();
        const result = await connection.query("CALL delete_foro(?);",foroId)
        return result[0][0].valor  
    } catch (error) {
        return error 
    }
    
}

const updateForo = async (datos)=>{
    try {
        const connection = await  getConnection();
        const result = await connection.query("call actualizar_foro(?,?,?,?,?,?)",[datos.id_foro,datos.descripcion,datos.fecha_creacion,datos.fecha_fin,datos.nombre_foro,datos.activo_ciclo])  
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