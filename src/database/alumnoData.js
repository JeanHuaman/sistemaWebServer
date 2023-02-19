import {getConnection} from "../database/database"

const getAllAlumnos = async ()=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("SELECT * FROM alumno")
    connection.end()
    return result
    }catch(error){
        console.log(error);
    }
}


const createAlumno = async (alumno)=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("INSERT INTO alumno SET ?",alumno)
    connection.end() 
    return result
    }catch(error){
        console.log(error);
    }
}

const getIdAlumno = async (id)=>{
    try{
    const connection = await  getConnection();    
    const result = await connection.query("SELECT * FROM alumno WHERE id_alumno = ?",id)    
    connection.end()    
    return result
    }catch(error){
        console.log(error);
    } 
}

const deleteAlumno = async (id)=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("DELETE FROM alumno WHERE id_alumno = ?",id)
    connection.end() 
    return result
    }catch(error){
        console.log(error);
    }
}

const updateAlumno = async (alumno,id)=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("UPDATE alumno SET ? WHERE id_alumno = ?",[alumno,id])  
    connection.end() 
    return result
    }catch(error){
        console.log(error);
    }
}
module.exports = {
    getAllAlumnos,
    getIdAlumno,
    createAlumno,
    deleteAlumno,
    updateAlumno
}