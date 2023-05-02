import {getConnection} from "../database/database"

const getNotificaciones= async (id_usuario)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        const result = await connection.query(`call sistemaweb.obtener_notificaciones(?)`,id_usuario)
        connection.release()
        return result[0]
    }catch(error){
        return error
    }
    
}


const createNotificacion = async (notificaciones)=>{
    try{
        console.log(notificaciones);
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection()
        notificaciones.map(async element => {
            return await connection.query(`call sistemaweb.guardar_notificaciones(?,?,?,?,?,?,?,?,?,?)`,[element.id_docente,element.id_alumno,element.id_curso,element.id_registro,element.numero_bimestre,element.tipo_calificacion,element.id_tipo_calificacion,element.fecha,element.nota,element.intencional])
            })
        connection.release()
        return 
    }catch(error){
        return error
    }   
}


module.exports = {
    createNotificacion,
    getNotificaciones
}