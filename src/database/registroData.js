import {getConnection} from "../database/database"

const getAllRegistroNotas= async (id_registro)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const registroNotas = await connection.query("call sistemaweb.obtener_notas_registro(?)",id_registro)
        connection.release()
        return registroNotas[0]
    }catch(error){
        return error
    }
    
}

const getRegistroDelDocente= async (datos)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const registro = await connection.query("call obtener_registro_delDocente(?,?,?,?,?)",[datos.id_docente,datos.id_curso,datos.grado,datos.seccion,datos.ciclo])
        connection.release()
        return registro[0][0]
    }catch(error){
        return error
    }
    
}
const createRegistro = async (registro)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query(`call create_registro(?,?,?,?,?,?);`,[registro.id_docente,registro.id_curso,registro.grado,registro.seccion,registro.ciclo,registro.active_registro])
        connection.release()
        return result[0][0].valor
    }catch(error){
        return error
    }   
}

const guardarNotaSubcapacidad = async (requestNotaSubcapacidad)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const id_registro_nota = await Promise.all(
            requestNotaSubcapacidad.map(async element => {
                return await connection.query(`call sistemaweb.guardar_nota_subcapacidad(?,?,?,?,?,?)`,[element.id_registro,element.id_alumno,element.numero_bimestre,element.id_capacidad,element.id_subcapacidad,element.nota_subcapacidad]) 
                })
        )        
        connection.release()
        return id_registro_nota[0][0][0].valor
    }catch(error){
        return error
    }   
}


const guardarNotaCapacidad = async (requestNotaCapacidad)=>{
    try{
        console.log(requestNotaCapacidad);
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const id_registro_nota = await Promise.all(
            requestNotaCapacidad.map(async element => {
                return await connection.query(`call sistemaweb.guardar_nota_capacidad(?,?,?,?,?)`,[element.id_registro,element.id_alumno,element.numero_bimestre,element.id_capacidad,element.nota_capacidad]) 
                })
        )        
        connection.release()
        return id_registro_nota[0][0][0].valor
    }catch(error){
        return error
    }   
}



const guardarNotaBimestre = async (requestNotaBimestre)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const id_registro_nota = await Promise.all(
            requestNotaBimestre.map(async element => {
                return await connection.query(`call sistemaweb.guardar_nota_bimestre(?,?,?,?)`,[element.id_registro,element.id_alumno,element.numero_bimestre,element.nota_bimestre])
                })
        )        
        connection.release()
        return id_registro_nota[0][0][0].valor
    }catch(error){
        return error
    }   
}


// const deleteCurso = async (cursoId)=>{
//     try {
//         const connection = await  getConnection();
//         const result = await connection.query("CALL delete_curso(?);",cursoId)
//         return result   
//     } catch (error) {
//         return error 
//     }
    
// }

// const updateCurso = async (curso)=>{
//     try {
//         const connection = await  getConnection();
//         const result = await connection.query("UPDATE curso SET nombre = ? WHERE id_curso = ?",[curso.nombre,curso.id_curso])  
//         return result  
//     } catch (error) {
//         return error 
//     }
    
// }
module.exports = {
    getRegistroDelDocente,
    createRegistro,
    getAllRegistroNotas,
    guardarNotaSubcapacidad,
    guardarNotaCapacidad,
    guardarNotaBimestre
}