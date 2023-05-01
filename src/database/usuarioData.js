import {getConnection} from "../database/database"

const getAllUsuario = async ()=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()        
        const usuarios = await connection.query("CALL get_all_usuarios()")
        connection.release()
        return usuarios
    }catch(error){
        return error
    }
    
}


const createUsuario = async (usuario)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()   
        const result = await connection.query(`CALL create_usuario(?,?,?,?,?,?,?,?,?,?,?)`,[usuario.user,usuario.password,usuario.nombre,usuario.apellido,usuario.edad,usuario.email,usuario.celular,usuario.rol,usuario?.grado || "",usuario?.seccion || "",usuario?.ciclo || ""])
        connection.release()
        return result
    }catch(error){
        return error
    }
    
}

const getUsuariosRol = async (rol)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection() 
        const result = await connection.query("CALL obtener_usuarios(?)",rol)
        connection.release()
        const lista = [...result[0]]
        return lista
    }catch(error){
        return error
    }
}

const deleteUsuario = async (usuarioId,rol)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection() 
        const result = await connection.query("CALL eliminar_usuario(?,?)",[rol,usuarioId])
        connection.release()
        return result   
    } catch (error) {
        return error 
    }
    
}

const updateUsuario = async (usuario)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection() 
        const result = await connection.query("CALL actualizar_usuario(?,?,?,?,?,?,?,?,?,?,?,?)",[usuario.id_usuario,usuario.user,usuario.password,usuario.nombre,usuario.apellido,usuario.edad,usuario.email,usuario.celular,usuario.rol,usuario?.grado || "",usuario?.seccion || "",usuario.ciclo])  
        connection.release()
        return result  
    } catch (error) {
        return error 
    }
    
}
module.exports = {
    getAllUsuario,
    createUsuario,
    getUsuariosRol,
    deleteUsuario,
    updateUsuario
}