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


// const createAdministrador = async (administrador)=>{
//     const connection = await  getConnection();
//     const result = await connection.query("INSERT INTO administrador SET ?",administrador)
//     return result
// }

// const getIdAdministrador = async (id)=>{
//     const connection = await  getConnection();
//     const result = await connection.query("SELECT * FROM administrador WHERE id_administrador = ?",id)
//     return result
// }

// const deleteAdministrador = async (id)=>{
//     const connection = await  getConnection();
//     const result = await connection.query("DELETE FROM administrador WHERE id_administrador = ?",id)
//     console.log(result);
//     return result
// }

// const updateAdministrador = async (administrador,id)=>{
//     const connection = await  getConnection();
//     const result = await connection.query("UPDATE administrador SET ? WHERE id_administrador = ?",[administrador,id])
//     return result
// }
module.exports = {
    getAllUsuario,
    // createAdministrador,
    // getIdAdministrador,
    // deleteAdministrador,
    // updateAdministrador
}