import {getConnection} from "./database"

const getAllProfesores = async ()=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("SELECT * FROM profesor")
    connection.end()
    return result
    }catch(error){
        console.log(error);
    }
}


const createProfesor = async (profesor)=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("INSERT INTO profesor SET ?",profesor)
    connection.end() 
    return result
    }catch(error){
        console.log(error);
    }
}

const getIdProfesor = async (id)=>{
    try{
    const connection = await  getConnection();    
    const result = await connection.query("SELECT * FROM profesor WHERE id_profesor = ?",id)    
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
    getAllProfesores,
    getIdProfesor,
    createProfesor,
    deleteAlumno,
    updateAlumno
}