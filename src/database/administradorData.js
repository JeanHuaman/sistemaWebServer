import {getConnection} from "../database/database"

const getAllAdministrador = async ()=>{
    const connection = await  getConnection();
    const result = await connection.query("SELECT * FROM administrador")
    return result
}


const createAdministrador = async (administrador)=>{
    const connection = await  getConnection();
    const result = await connection.query("INSERT INTO administrador SET ?",administrador)
    return result
}

const getIdAdministrador = async (id)=>{
    const connection = await  getConnection();
    const result = await connection.query("SELECT * FROM administrador WHERE id_administrador = ?",id)
    return result
}

const deleteAdministrador = async (id)=>{
    const connection = await  getConnection();
    const result = await connection.query("DELETE FROM administrador WHERE id_administrador = ?",id)
    console.log(result);
    return result
}

const updateAdministrador = async (administrador,id)=>{
    const connection = await  getConnection();
    const result = await connection.query("UPDATE administrador SET ? WHERE id_administrador = ?",[administrador,id])
    return result
}
module.exports = {
    getAllAdministrador,
    createAdministrador,
    getIdAdministrador,
    deleteAdministrador,
    updateAdministrador
}