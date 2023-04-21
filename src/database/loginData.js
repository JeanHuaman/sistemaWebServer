import {getConnection} from "../database/database"

const getUser = async (user,pass)=>{
    try{
        const globalPool = await  getConnection();
        let connection = await globalPool.getConnection() 
        let result = await connection.query("SELECT * FROM usuario WHERE user=? and password=? limit 1",[user,pass])
        if(result.length === 0 ) return result

        result = {...result[0]}
        if(result.rol === "alumno"){
            const datosExtraAlumno = await connection.query(`SELECT grado,seccion,ciclo FROM alumno WHERE id_alumno=?`,result.id_usuario)
            result={...result,...datosExtraAlumno[0]}
        }
        connection.release()
        return result
    }catch(error){
        return error
    } 
}


module.exports = {
    getUser
}