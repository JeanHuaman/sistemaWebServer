import {getConnection} from "../database/database"

const getAllCurso= async ()=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query("CALL obtener_cursos()")
        connection.release()
        return cursos
    }catch(error){
        return error
    }
    
}

const getAllCursoPorId= async (cursoId)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query("CALL obtener_curso_capacidad_idCurso(?)",cursoId)
        connection.release()
        return cursos
    }catch(error){
        return error
    }
    

}
const getCursos= async ()=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const cursos = await connection.query("select id_curso, nombre from curso")
        connection.release()
        return cursos
    }catch(error){
        return error
    }
    
}
const createCurso = async (curso)=>{
    try{
        console.log(curso);
        console.log(curso.capacidades[0].subcapacidades);
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query(`CALL create_curso(?);`,curso.nombre)
        const id_curso = await result[0][0].valor
        curso.capacidades.forEach(async el => {
            try {
                const respuestaCapacidad = await connection.query(`CALL create_capacidad(?,?);`,[id_curso,el.nombre_capacidad])
                const id_capacidad = await respuestaCapacidad[0][0].valor
                el.subcapacidades.forEach(async el_sub=>{
                    await connection.query(`CALL create_subcapacidad(?,?);`,[id_capacidad,el_sub.nombre_subcapacidad])
                })
                
            } catch (error) {
                return error
            }
        });
        connection.release()
        return id_curso
    }catch(error){
        return error
    }   
}



const deleteCurso = async (cursoId)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query("CALL delete_curso(?);",cursoId)
        connection.release()
        return result   
    } catch (error) {
        return error 
    }
    
}

const updateCurso = async (curso)=>{
    try {
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query("UPDATE curso SET nombre = ? WHERE id_curso = ?",[curso.nombre,curso.id_curso])  
        connection.release()
        return result  
    } catch (error) {
        return error 
    }
    
}
module.exports = {
    getAllCurso,
    getAllCursoPorId,
    createCurso,
    getCursos,
    deleteCurso,
    updateCurso
}