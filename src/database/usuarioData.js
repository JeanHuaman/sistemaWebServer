import {getConnection} from "../database/database"

const getAllUsuario = async ()=>{
    try{
        const connection = await  getConnection();
        const usuarios = await connection.query("SELECT * FROM usuario")
        const alumnos = await connection.query("SELECT * FROM alumno")
        return {usuarios,alumnos}
    }catch(error){
        console.log(error);
        return error
    }
    
}


const createUsuario = async (usuario)=>{
    try{
        const connection = await  getConnection();
        const result = await connection.query(`CALL create_usuario(?,?,?,?,?,?,?,?,?,?)`,[usuario.user,usuario.password,usuario.nombre,usuario.apellido,usuario.edad,usuario.email,usuario.celular,usuario.rol,usuario?.grado || "",usuario?.seccion || ""])
        return result
    }catch(error){
        return error
    }
    
}

const getUsuariosRol = async (rol)=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("CALL obtener_usuarios(?)",rol)
    const lista = [...result[0]]
    return lista
    }catch(error){
        return error
    }
}

// const deleteAdministrador = async (id)=>{
//     const connection = await  getConnection();
//     const result = await connection.query("DELETE FROM administrador WHERE id_administrador = ?",id)
//     console.log(result);
//     return result
// }

const updateUsuario = async (usuario)=>{
    const connection = await  getConnection();
    const result = await connection.query("CALL actualizar_usuario(?,?,?,?,?,?,?,?,?,?,?)",[usuario.id_usuario,usuario.user,usuario.password,usuario.nombre,usuario.apellido,usuario.edad,usuario.email,usuario.celular,usuario.rol,usuario?.grado || "",usuario?.seccion || ""])
    
    return result
}
module.exports = {
    getAllUsuario,
    createUsuario,
    getUsuariosRol,
    // deleteAdministrador,
    updateUsuario
}